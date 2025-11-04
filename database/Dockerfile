FROM postgres:16

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123
ENV POSTGRES_DB=livestock_db

COPY ./init /docker-entrypoint-initdb.d/
