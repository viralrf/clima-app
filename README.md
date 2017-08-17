# Clima App

Revisa la hora y temperatura de distintas ciudades

## Inicio

Estas instrucciones permitirán instalar la aplicación en un ambiente heroku, también utilizando la plataforma redis-cloud.

### Prerrequisitos

Para instalar y utilizar esta aplicación se necesitan las siguientes herramientas.
(Descritas las versiones utilizadas durante su desarrollo).

```
nodeJs v6.11.2
npm v3.10.10
git v2.11.1
heroku-cli v6.13.18

```

También será necesario crear una cuenta gratuita en heroku.

### Instalar

Para instalar la aplicación primero se debe copiar el repositorio desde github.

```
git clone https://github.com/viralrf/clima-app.git nombre_carpeta
```

Luego se deben utilizar los siguientes comandos.

```
cd nombre_carpeta
heroku login

```

Luego de proporcionar nuestro nombre de usuario y contraseña, utilizamos los siguientes comandos.

```
heroku create
git add .
git commit -m "mensaje"
git push heroku master

```

Finalmente utilizamos el siguiente comando para abrir la aplicación en el navegador.

```
heroku open

```
