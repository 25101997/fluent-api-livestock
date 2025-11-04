# Imagen base ligera de Node
FROM node:18-alpine

# Crear usuario no root
RUN addgroup -S angular && adduser -S angular -G angular

# Crear carpeta de trabajo
WORKDIR /home/angular/app

# Variables para instalación global segura
ENV NPM_CONFIG_PREFIX=/home/angular/.npm-global
ENV PATH=$PATH:/home/angular/.npm-global/bin

# Cambiar al nuevo usuario no root
USER angular

# Instalar Angular CLI global
RUN npm install -g @angular/cli@16

# Copiar archivos del proyecto al contenedor con permisos adecuados
COPY --chown=angular:angular . .

# Exponer el puerto estándar de Angular
EXPOSE 4200

# Comando de arranque
CMD ["ng", "serve", "--host", "0.0.0.0"]

