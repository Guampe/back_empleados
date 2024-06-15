Aplicación CRUD Backend con Node.js, Express y SQL Server
#

Descripción General


Este proyecto es un backend para una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) que gestiona empleados 
y sus solicitudes relacionadas. Está construido utilizando Node.js y Express, y utiliza SQL Server como base de datos. 
La aplicación permite realizar operaciones CRUD en empleados y solicitudes, asegurando que todas las interacciones con la base de datos sean seguras.


#
Tecnologías Utilizadas

Node.js: Entorno de ejecución de JavaScript.
Express: Framework web para Node.js.
mssql: Cliente de Microsoft SQL Server para Node.js.
dotenv: Carga variables de entorno desde un archivo .env a process.env.


#
Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

Node.js (v14 o superior)
npm (Node Package Manager)
Microsoft SQL Server


#
Configurar variables de entorno

Crea un archivo .env en el directorio backend con el siguiente contenido, ajustándolo con tus credenciales y detalles de la base de datos:

PORT=3000 (o el de tu preferencia)

DB_USER=tuUsuarioDeBaseDeDatos

DB_PASSWORD=tuContraseñaDeBaseDeDatos

DB_SERVER=tuServidorDeBaseDeDatos

DB_DATABASE=tuNombreDeBaseDeDatos


#
Crear tablas en SQL Server


Conéctate a tu servidor de SQL Server y ejecuta las siguientes instrucciones SQL para crear las tablas necesarias:


CREATE TABLE Empleado (

    ID INT IDENTITY(1,1) PRIMARY KEY,
    fecha_ingreso DATE,    
    nombre VARCHAR(100),
    salario INT

);



CREATE TABLE Solicitud (

    id_solicitud INT IDENTITY(1,1) PRIMARY KEY,
    codigo VARCHAR(50),
    descripcion VARCHAR(50),
    resumen VARCHAR(50),
    id_empleado INT,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(ID)

);


#
Para este ejercicio se creó la Base de Datos como 

CREATE DATABASE empleados_konecta;

#


Endpoints de la API
Empleados
Crear Empleado

POST /empleados
Crea un nuevo empleado.
Leer Empleados

GET /empleados
Obtiene la lista de empleados.
Actualizar Empleado

PUT /empleados/:id
Actualiza los detalles de un empleado por ID.
Eliminar Empleado

DELETE /empleados/:id
Elimina un empleado por ID.
Solicitudes
Crear Solicitud

POST /solicitudes
Crea una nueva solicitud.
Leer Solicitudes

GET /solicitudes
Obtiene la lista de solicitudes.
Eliminar Solicitud

DELETE /solicitudes/:id
Elimina una solicitud por ID.

#

Comandos git utilizados para subir los proyectos al repositorio remoto.



git init para inicializar mi repositorio en local

git add para añadir archivos específicos o todos los archivos modificados al área de staging para prepararlos para el siguiente commit

git commit -m "Mensaje del mi commit" Confirmo los cambios preparados en el área de staging con un mensaje explicativo

git remote add origin https://github.com/Guampe... para inicializar y conectar con mi repositorio público en github

git push origin nombre-rama-o-branch para enviar cambios. En este caso a la rama main ya que soy el único trabajando en el proyecto

En este caso no ha sido necesario clonar, solicitar pull, hacer merge, crear o cambiar entre ramas ya que se trabajo sobre el mismo init local.

