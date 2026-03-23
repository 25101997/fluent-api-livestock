-- DROP TABLE IF EXISTS animal CASCADE;

/*----- INICIO SCRIPTS PARA CREACION, MODIFICACION DE LA TABLA ANIMAL -----*/

CREATE TABLE IF NOT EXISTS animal (
    id SERIAL PRIMARY KEY,

    -- 🔹 Llaves foráneas (referencias obligatorias)
    origin_id INTEGER NOT NULL,
    status_id INTEGER NOT NULL,
    stage_id INTEGER NOT NULL,

    -- 🔹 Atributos descriptivos
    sex VARCHAR(10) NOT NULL CHECK (sex IN ('macho', 'hembra')),
    breed VARCHAR(100),

    -- 🔹 Fechas de control
    birth_date DATE NOT NULL,
    created TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    -- 🔹 Relaciones
    CONSTRAINT fk_origin FOREIGN KEY (origin_id) REFERENCES animal_origin(id) ON DELETE RESTRICT,
    CONSTRAINT fk_status FOREIGN KEY (status_id) REFERENCES animal_status(id) ON DELETE RESTRICT,
    CONSTRAINT fk_stage FOREIGN KEY (stage_id) REFERENCES animal_stage(id) ON DELETE RESTRICT
);

-- 🔹 Índices para optimizar búsquedas frecuentes
CREATE INDEX IF NOT EXISTS idx_animal_origin ON animal(origin_id);
CREATE INDEX IF NOT EXISTS idx_animal_status ON animal(status_id);
CREATE INDEX IF NOT EXISTS idx_animal_stage ON animal(stage_id);

-- 🔹 Trigger para mantener la columna updated automáticamente
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_animal_timestamp
BEFORE UPDATE ON animal
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

ALTER TABLE animal
ADD COLUMN weight NUMERIC(6,2) DEFAULT 1 CHECK (weight BETWEEN 1 AND 1000) NOT NULL;

ALTER TABLE animal
ADD COLUMN litter_id INTEGER,
ADD CONSTRAINT fk_litter FOREIGN KEY (litter_id)
    REFERENCES animal_reproductive_record(id)
    ON DELETE SET NULL;

ALTER TABLE animal
ALTER COLUMN created TYPE TIMESTAMPTZ USING created AT TIME ZONE 'UTC';

ALTER TABLE animal
ALTER COLUMN updated TYPE TIMESTAMPTZ USING updated AT TIME ZONE 'UTC';

CREATE TABLE IF NOT EXISTS animal_production_use (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

INSERT INTO animal_production_use(name) VALUES('reproduccion'),('engorde');

ALTER TABLE animal
ADD COLUMN production_use_id INTEGER,
ADD CONSTRAINT fk_production_use FOREIGN KEY (production_use_id)
    REFERENCES animal_production_use(id)
    ON DELETE SET NULL;

ALTER TABLE animal
ADD COLUMN is_castrated BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS animal_breed (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

ALTER TABLE animal
ADD COLUMN breed_id INTEGER,
ADD CONSTRAINT fk_breed FOREIGN KEY (breed_id)
    REFERENCES animal_breed(id)
    ON DELETE SET NULL;

DELETE FROM animal_status WHERE id=10 and name='gestando';



/*----- INICIO SCRIPTS PARA CREACION, MODIFICACION DE LA TABLA ANIMAL REPRODUCTIVE RECORD -----*/

CREATE TABLE IF NOT EXISTS animal_reproductive_record (
    id SERIAL PRIMARY KEY,

    -- 🔹 Relaciones con la tabla animal
    mother_id INTEGER NOT NULL,
    father_id INTEGER NOT NULL,

    -- 🔹 Estado del proceso reproductivo
    status VARCHAR(12) NOT NULL CHECK (status IN ('registrado','fecundado','no fecundado','abortado', 'finalizado')),

    -- 🔹 Resultados de la camada
    born_male INTEGER DEFAULT 0 CHECK (born_male BETWEEN 0 AND 30),
    born_female INTEGER DEFAULT 0 CHECK (born_female BETWEEN 0 AND 30),
    aborted_male INTEGER DEFAULT 0 CHECK (aborted_male BETWEEN 0 AND 30),
    aborted_female INTEGER DEFAULT 0 CHECK (aborted_female BETWEEN 0 AND 30),

    -- 🔹 Observaciones opcionales
    notes TEXT,

    -- 🔹 Fechas de registro
    created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    -- 🔹 Llaves foráneas
    CONSTRAINT fk_mother FOREIGN KEY (mother_id) REFERENCES animal(id) ON DELETE RESTRICT,
    CONSTRAINT fk_father FOREIGN KEY (father_id) REFERENCES animal(id) ON DELETE RESTRICT
);


--DROP TABLE IF EXISTS Animal_Reproductive_Record;

SELECT id FROM animal WHERE id IN (5, 2);

DELETE FROM Animal_Reproductive_Record;

INSERT INTO Animal_Reproductive_Record (mother, father, status, born_male, born_female, aborted_male, aborted_female, created, updated) 
VALUES (2,5,'confirmado', 1,1,1,1,'10/19/2025 00:14:17','10/19/2025 00:14:17');

SELECT * FROM Animal_Reproductive_Record;

ALTER TABLE animal_reproductive_record
ADD CONSTRAINT animal_reproductive_record_status_check
CHECK (status IN ('registrado','fecundado','no fecundado','abortado', 'finalizado'));

TRUNCATE TABLE animal_reproductive_record RESTART IDENTITY CASCADE;

TRUNCATE TABLE animal RESTART IDENTITY CASCADE;

DELETE FROM animal WHERE litter_id = 2 AND sex = 'macho';

SELECT * FROM animal WHERE id = 12;

UPDATE animal SET production_use_id = null, breed_id = null WHERE id =12;

SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'animal';

ALTER TABLE animals
ALTER COLUMN breed DROP NOT NULL;

SELECT * FROM animal WHERE id=17;


DELETE FROM animal;
