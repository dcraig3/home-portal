import jaydebeapi
import time

conn = jaydebeapi.connect('org.h2.Driver', 'jdbc:h2:tcp://localhost:9092/mem:testdb', ['sa', ''], './h2.jar',)
curs = conn.cursor()
# Create new sql file
print("creating sql")
curs.execute("SCRIPT TO '/localbackup/fileName.sql'")
print("saved to /localbackup/fileName.sql")
