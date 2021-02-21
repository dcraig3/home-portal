FROM maven:3.6.3-jdk-11-openj9 as build-image
RUN cat /etc/os-release
RUN apt-get update
RUN apt-get install -y python3 dos2unix python3-pip
# RUN apt-get install -y nodejs npm python3 dos2unix python3-pip
RUN pip3 install googledrivedownloader jaydebeapi pydrive google-api-python-client
COPY get_schema.py settings.yaml client_secrets.json mycreds.txt ./
COPY app /app
RUN dos2unix ./get_schema.py && python3 ./get_schema.py
RUN stat /app/backend/src/main/resources/schema.sql
# WORKDIR /app/frontend
# RUN npm install
WORKDIR /app
RUN mvn clean package
FROM centos:8
ENV JAVA_HOME /usr/lib/jvm/jdk-11.0.2/
ENV PATH $JAVA_HOME/bin:$PATH
ENV CATALINA_HOME /opt/tomcat
ENV PATH $CATALINA_HOME/bin:$PATH
RUN mkdir /usr/lib/jvm
RUN yum update -y
RUN yum repolist all
RUN yum -y update; yum clean all
RUN yum -y install nano unzip mod_ssl python3 dos2unix
RUN pip3 install jaydebeapi
RUN pip3 install pydrive
RUN pip3 install google-api-python-client
RUN curl -o /openjdk-11.0.2_linux-x64_bin.tar.gz https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
RUN tar xvf openjdk-11.0.2_linux-x64_bin.tar.gz -C /usr/lib/jvm
RUN java --version
RUN useradd tomcat
RUN mkdir /opt/tomcat
COPY apache-tomcat-9.0.37.tar.gz ./
RUN tar -zxvf apache-tomcat-9.0.37.tar.gz -C /opt/tomcat --strip-components=1
RUN rm -rf /opt/tomcat/webapps/ROOT/
RUN cd /opt && chown -R tomcat tomcat/
RUN chmod 777 /etc/systemd/system
RUN echo $"[Unit] Description=Apache Tomcat Web Application\Container After=syslog.target network.target\[Service]\Type=forking\Environment=JAVA_HOME=/usr/lib/jvm/jre\Environment=CATALINA_PID=/opt/tomcat/temp/tomcat.pid\Environment=CATALINA_HOME=/opt/tomcat\Environment=CATALINA_BASE=/opt/tomcat\Environment='CATALINA_OPTS=-Xms512M -Xmx1024M -server -XX:+UseParallelGC'\Environment='JAVA_OPTS=-Djava.awt.headless=true -Djava.security.egd=file:/dev/./urandom'\ExecStart=/opt/tomcat/bin/startup.sh\ExecStop=/bin/kill -15 $MAINPID\User=tomcat\Group=tomcat\[Install]\WantedBy=multi-user.target" > /etc/systemd/system/tomcat.service
RUN chmod 777 -R /opt/tomcat/webapps/manager/META-INF
RUN echo $"<?xml version=\"1.0\" encoding=\"UTF-8\"?><Context antiResourceLocking=\"false\" privileged=\"true\"><Manager sessionAttributeValueClassNameFilter=\"java\.lang\.(?:Boolean|Integer|Long|Number|String)|org\.apache\.catalina\.filters\.CsrfPreventionFilter\$LruCache(?:\$1)?|java\.util\.(?:Linked)?HashMap\"/></Context>" > /opt/tomcat/webapps/manager/META-INF/context.xml
RUN echo $"<?xml version=\"1.0\" encoding=\"UTF-8\"?><tomcat-users xmlns=\"http://tomcat.apache.org/xml\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://tomcat.apache.org/xml tomcat-users.xsd\" version=\"1.0\"><role rolename=\"manager-script\"/><role rolename=\"admin-gui\"/><role rolename=\"manager-gui\"/><user username=\"tomcat\" password=\"World2k!\" roles=\"admin-gui,manager-gui,manager-script\"/></tomcat-users>" > /opt/tomcat/conf/tomcat-users.xml
COPY setenv.sh /opt/tomcat/bin
RUN chmod +x /opt/tomcat/bin/setenv.sh
RUN mkdir /opt/certs
COPY /certs /opt/certs
RUN keytool -genkey -keyalg RSA -dname "CN=jsvede.bea.com,OU=DRE,O=BEA,L=Denver,S=Colorado,C=US" -keypass zx#asqw_TST456$  -storepass zx#asqw_TST456$ -keystore /opt/certs/tomcat.keystore \
&& keytool -importcert -file /opt/certs/DoD_Root_CA_2__0x05__DoD_Root_CA_2.cer -alias DODRoot2 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -importcert -file /opt/certs/DoD_Root_CA_3__0x01__DoD_Root_CA_3.cer -alias DODRoot3 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -importcert -file /opt/certs/DoD_Root_CA_4__0x01__DoD_Root_CA_4.cer -alias DODRoot4 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -importcert -file /opt/certs/DoD_Root_CA_5__0x0F__DoD_Root_CA_5.cer -alias DODRoot5 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -importcert -file /opt/certs/DoD_Root_CA_3__0x012B__DOD_SW_CA-53.cer -alias DODRoot53 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -importcert -file /opt/certs/DoD_JITC_Root_CA_3__0x009B__DOD_JITC_SW_CA-53.cer -alias DODRootJITC53 -keystore /opt/certs/truststore.jks -storepass changeit -noprompt \
&& keytool -list -keystore /opt/certs/truststore.jks
RUN mkdir -p /opt/tomcat/conf/Catalina/localhost
COPY server.xml /opt/tomcat/conf/server.xml
COPY web.xml /opt/tomcat/conf/web.xml 
ARG CACHE_BUSTER=1
VOLUME /opt/tomcat
WORKDIR /opt/tomcat
COPY --from=build-image /app/backend/target/backend-0.0.1-SNAPSHOT.war /opt/tomcat/webapps/ROOT.war
COPY backup.py settings.yaml client_secrets.json mycreds.txt BackupNow.py ./
COPY h2-1.4.197.jar ./h2.jar
EXPOSE 8080
ENTRYPOINT python3 /opt/tomcat/backup.py & catalina.sh run