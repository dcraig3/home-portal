# Home Portal

## Application information
- Angular front end
- Java Springboot REST API back end
- H2 mem database inside Springboot 

## Container information
- CentOS 8
- openjdk 11.0.2
- Apache Tomcat 9.0.37

This application will be for creating an inventory system for a home, this is a base to get started with

fileName.sql is not included and will need to be generated inside of the container when it first starts

Run docker container with

```sh
docker build . -t home-portal
docker run -itdp 80:8080 -v /home/your/sql/location:/localbackup home-portal
```

The container will save the sql of the h2 database into a directory on the container every 8 hours starting 5 minutes after initial boot. Using a volume attatched to the container you can save this to a local machine

The user can save the database manually from inside of the container by using the command
```sh
python3 BackupLocal.py
```

