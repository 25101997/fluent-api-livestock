CREATE TABLE IF NOT EXISTS Animal_Reproductive_Record (
	id SERIAL PRIMARY KEY,
	mother INTEGER NOT NULL,
	father INTEGER NOT NULL,
    status VARCHAR(10) CHECK (status IN ('confirmado', 'finalizado', 'abortado')),
	born_male INTEGER CHECK (born_male BETWEEN 0 AND 30),
	born_female INTEGER CHECK (born_female BETWEEN 0 AND 30),
	aborted_male INTEGER CHECK (aborted_male BETWEEN 0 AND 30),
	aborted_female INTEGER CHECK (aborted_female BETWEEN 0 AND 30),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT fk_mother FOREIGN KEY (mother) REFERENCES animal(id),
	CONSTRAINT fk_father FOREIGN KEY (father) REFERENCES animal(id)
);