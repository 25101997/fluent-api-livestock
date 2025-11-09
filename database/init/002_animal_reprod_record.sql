CREATE TABLE IF NOT EXISTS animal_reproductive_record (
    id SERIAL PRIMARY KEY,

    -- 🔹 Relaciones con la tabla animal
    mother_id INTEGER NOT NULL,
    father_id INTEGER NOT NULL,

    -- 🔹 Estado del proceso reproductivo
    status VARCHAR(12) NOT NULL CHECK (status IN ('registrado', 'confirmado', 'finalizado', 'abortado')),

    -- 🔹 Resultados de la camada
    born_male INTEGER DEFAULT 0 CHECK (born_male BETWEEN 0 AND 30),
    born_female INTEGER DEFAULT 0 CHECK (born_female BETWEEN 0 AND 30),
    aborted_male INTEGER DEFAULT 0 CHECK (aborted_male BETWEEN 0 AND 30),
    aborted_female INTEGER DEFAULT 0 CHECK (aborted_female BETWEEN 0 AND 30),

    -- 🔹 Total de crías nacidas (puede calcularse en API o trigger)
    total_born INTEGER GENERATED ALWAYS AS (born_male + born_female) STORED,

    -- 🔹 Observaciones opcionales
    notes TEXT,

    -- 🔹 Fechas de registro
    created TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    -- 🔹 Llaves foráneas
    CONSTRAINT fk_mother FOREIGN KEY (mother_id) REFERENCES animal(id) ON DELETE RESTRICT,
    CONSTRAINT fk_father FOREIGN KEY (father_id) REFERENCES animal(id) ON DELETE RESTRICT
);


