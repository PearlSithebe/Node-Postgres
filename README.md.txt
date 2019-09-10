
This repository contains code with javascript functions that query a postgresql database.
The database was created inside a docker postgres container/images.
The docker compose file used to create the docker image is the file named docker-compose.yml.

COMMANDS USED TO CREATE TABLE AND INSERT DATA:

-CREATE TABLE Visitor(Visitor_id serial PRIMARY KEY,Full_name VARCHAR(60) NOT NULL,Age SMALLINT NOT NULL CHECK (Age >0 and Age<200), Date DATE NOT NULL, Time TIME NOT NULL,Facilitator_name VARCHAR(60) NOT
NULL, Comments TEXT NOT NULL);

-INSERT INTO Visitor(name, age, date, time, facilitator, comments) VALUES ($1, $2, $3, $4, $5, $6);


NOTE:
Docker, docker-compose and npm must be installed.

To run the code:
Run 'npm install' to install all the necessary dependencies to run the code.
Run 'node index' to run the code in the terminal.

