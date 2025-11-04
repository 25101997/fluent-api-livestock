CREATE TABLE IF NOT EXISTS animal_status (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS animal_origin (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS animal_stage (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS animal (
	id SERIAL PRIMARY KEY,
	origin INT NOT NULL,
	status INT NOT NULL,
    stage INT,
	sex VARCHAR(10) CHECK (sex IN ('hembra', 'macho')) NOT NULL,
	breed VARCHAR(10),
	birth_date DATE NOT NULL,
	created TIMESTAMP DEFAULT NOW(),
	updated TIMESTAMP DEFAULT NOW(),
	CONSTRAINT fk_origin FOREIGN KEY (origin) REFERENCES animal_origin(id),
	CONSTRAINT fk_status FOREIGN KEY (status) REFERENCES animal_status(id),
    CONSTRAINT fk_stage FOREIGN KEY (stage) REFERENCES animal_stage(id)
);

ALTER TABLE animal
ALTER COLUMN created TYPE TIMESTAMPTZ USING created AT TIME ZONE 'UTC';

ALTER TABLE animal
ALTER COLUMN updated TYPE TIMESTAMPTZ USING updated AT TIME ZONE 'UTC';

INSERT INTO animal (origin, status, stage, sex, breed, birth_date) VALUES (1,1,1,'hembra', '', '08-01-2025')

INSERT INTO animal_status (name) VALUES ('registrado');
INSERT INTO animal_status (name) VALUES ('vendido');
INSERT INTO animal_status (name) VALUES ('sacrificado');
INSERT INTO animal_status (name) VALUES ('fallecimiento');

INSERT INTO animal_stage (name) VALUES ('nacimiento');
INSERT INTO animal_stage (name) VALUES ('destete');
INSERT INTO animal_stage (name) VALUES ('crecimiento');
INSERT INTO animal_stage (name) VALUES ('reproduccion');
INSERT INTO animal_stage (name) VALUES ('gestacion');
INSERT INTO animal_stage (name) VALUES ('lactante');
INSERT INTO animal_stage (name) VALUES ('engorde');

INSERT INTO animal_origin (name) VALUES ('nacido');
INSERT INTO animal_origin (name) VALUES ('comprado');

INSERT INTO Animal_Reproductive_Record (mother, father, status, born_male, born_female, aborted_male, aborted_female, created, updated) 
VALUES (2,5,'confirmado', 1,1,1,1,'10/19/2025 00:14:17','10/19/2025 00:14:17');
