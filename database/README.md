docker run -d \
  --name postgres_local \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=123 \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16

docker exec -it postgres_local psql -U postgres

\l           -- Lista todas las bases de datos
\dt          -- Lista todas las tablas
\d nombre    -- Muestra la estructura de una tabla
\du          -- Lista los roles/usuarios
\df          -- Lista funciones definidas
\?           -- Muestra ayuda general de comandos
\h comando   -- Muestra ayuda sobre comandos SQL (ej. \h SELECT)
\q           -- Salir de psql
\conninfo    -- Información de conexión actual (base de datos, usuario, host, puerto)

SELECT * FROM tabla;
INSERT INTO tabla (col1, col2) VALUES ('valor1', 'valor2');
UPDATE tabla SET col1 = 'nuevo' WHERE id = 1;
DELETE FROM tabla WHERE id = 1;

SELECT current_database();
SELECT current_user;
SELECT current_schema();
