Instituto de Defensoría Pública de Nuevo León

Aplicación web del Instituto de Defensoría Pública de Nuevo León, desarrollada para proporcionar información institucional, servicios de asesoría y defensa jurídica, trámites, legislación, transparencia, ubicación de oficinas y canales de contacto.

Descripción

El proyecto ofrece una interfaz web moderna, responsiva y accesible para facilitar el acceso de la ciudadanía a la información y servicios del Instituto de Defensoría Pública de Nuevo León.

Entre sus principales funcionalidades se encuentran:

Información institucional.
Servicios de defensa y asesoría jurídica.
Información sobre trámites.
Consulta de legislación.
Información de transparencia.
Directorio y ubicación de oficinas.
Información de contacto.
Navegación adaptada a dispositivos móviles.
Buscador de contenido.
Asistente conversacional basado en inteligencia artificial.
Integración con Google Gemini para funcionalidades de IA.
Tecnologías utilizadas

El proyecto utiliza las siguientes tecnologías principales:

React 19
TypeScript
TanStack Start
TanStack Router
TanStack React Query
Vite
Tailwind CSS 4
Radix UI
Framer Motion
React Hook Form
Zod
Google Gemini / AI SDK
Nitro
ESLint
Prettier
Requisitos

Para ejecutar el proyecto se requiere:

Node.js 20 o superior
npm

Se recomienda utilizar una versión LTS de Node.js.

También existe configuración para trabajar con Bun, ya que el proyecto contiene bun.lock y bunfig.toml. Sin embargo, para una instalación estándar se recomienda utilizar Node.js + npm.

Comprobar las versiones instaladas

Ejecutar:

node -v

Debe mostrar Node.js 20 o superior.

Comprobar npm:

npm -v

Comprobar Git:

git --version
Descargar el proyecto

El código fuente se encuentra alojado en GitHub.

Clonar el repositorio:

git clone https://github.com/jsimonmuniz-blip/defensoriapublica1.git

Entrar a la carpeta:

cd defensoriapublica1
Instalación de dependencias

Una vez dentro de la carpeta del proyecto, ejecutar:

npm install

Este comando instalará todas las dependencias especificadas en package.json.

Después de la instalación aparecerá la carpeta:

node_modules/

Esta carpeta es generada automáticamente y no debe subirse al repositorio de GitHub.

Variables de entorno

Antes de ejecutar el proyecto, revisar si existe alguno de los siguientes archivos:

.env
.env.local
.env.example

Si el proyecto contiene un archivo:

.env.example

utilizarlo como referencia para crear:

.env

Ejemplo:

VARIABLE=valor
Importante sobre las variables de entorno

No colocar contraseñas, tokens privados, claves secretas o credenciales directamente dentro de archivos que vayan a publicarse en GitHub.

En particular, las credenciales relacionadas con servicios de inteligencia artificial o APIs externas deben manejarse mediante variables de entorno y configurarse nuevamente en el servidor de producción.

Si el proyecto requiere una clave de Google Gemini u otro servicio externo, dicha clave debe ser proporcionada por el administrador del sistema mediante un medio seguro.

Ejecutar el proyecto en desarrollo

Para iniciar el servidor de desarrollo:

npm run dev

Vite mostrará una dirección local similar a:

http://localhost:5173/

Abrir esa dirección en el navegador.

Mientras el servidor esté ejecutándose, los cambios realizados en el código podrán visualizarse durante el desarrollo.

Para detener el servidor:

Ctrl + C
Crear una compilación de producción

Cuando se haya comprobado que el proyecto funciona correctamente, ejecutar:

npm run build

Este comando genera la versión optimizada para producción de acuerdo con la configuración de Vite + TanStack Start + Nitro.

Si la compilación termina correctamente, se puede continuar con el proceso de despliegue.

Previsualizar la compilación

Para realizar una prueba local de la compilación generada:

npm run preview

La herramienta mostrará una dirección local para consultar la aplicación.

Arquitectura del proyecto

La aplicación utiliza TanStack Start, por lo que contiene tanto código de interfaz como componentes relacionados con el servidor.

La estructura principal se encuentra dentro de:

src/

con carpetas y archivos principales como:

src/
├── assets/
├── components/
├── data/
├── hooks/
├── lib/
├── routes/
├── routeTree.gen.ts
├── router.tsx
├── server.ts
├── start.ts
└── styles.css
Descripción de las carpetas
src/assets/

Contiene recursos gráficos utilizados por la aplicación.

src/components/

Contiene componentes reutilizables de la interfaz.

src/data/

Contiene información y datos utilizados por diferentes partes de la aplicación.

src/hooks/

Contiene hooks personalizados de React.

src/lib/

Contiene funciones, utilidades y lógica auxiliar.

src/routes/

Contiene las rutas y páginas de la aplicación.

src/router.tsx

Contiene la configuración del router.

src/routeTree.gen.ts

Archivo relacionado con la generación del árbol de rutas de TanStack Router.

No modificar manualmente este archivo salvo que sea necesario y se conozca el funcionamiento de TanStack Router.

src/server.ts

Contiene la entrada personalizada del servidor utilizada por TanStack Start.

src/start.ts

Contiene la configuración relacionada con el inicio de la aplicación.

Despliegue en un servidor
Requisito importante

Debido a que el proyecto utiliza:

TanStack Start
Nitro
Vite
React
TypeScript

el servidor de producción debe proporcionar un entorno compatible con Node.js para ejecutar la aplicación generada.

No se debe asumir que el proyecto funciona simplemente copiando archivos HTML a un hosting estático.

Antes de contratar o utilizar un servidor nuevo, confirmar que el proveedor permita ejecutar aplicaciones Node.js.

Instalación en el servidor

Una vez que el servidor tenga Node.js disponible, clonar el repositorio:

git clone https://github.com/jsimonmuniz-blip/defensoriapublica1.git

Entrar a la carpeta:

cd defensoriapublica1

Instalar las dependencias:

npm install

Configurar las variables de entorno necesarias para producción.

Posteriormente generar la compilación:

npm run build
Ejecución en producción

El método exacto para iniciar la aplicación dependerá de la configuración final del servidor y de la salida de producción generada por TanStack Start/Nitro.

No modificar los comandos de producción sin revisar primero la configuración del servidor y el resultado de npm run build.

El servidor debe mantener ejecutándose el proceso de Node.js que corresponda a la compilación de producción.

Para servidores Linux se puede utilizar un administrador de procesos como PM2 si el proveedor del servidor lo permite.

Dominio y HTTPS

Después de instalar correctamente la aplicación en el servidor:

Configurar el dominio para apuntar al servidor.
Configurar el servidor web/proxy correspondiente.
Configurar HTTPS.
Verificar que el dominio cargue correctamente.
Comprobar las rutas internas.
Comprobar las funcionalidades que utilicen APIs externas.

El dominio y los registros DNS se administran independientemente del código fuente almacenado en GitHub.

Actualización del proyecto

Si posteriormente se realizan modificaciones en GitHub, el servidor puede actualizarse mediante:

git pull

Después de actualizar el código, normalmente será necesario instalar dependencias nuevas:

npm install

y generar nuevamente la compilación:

npm run build

Si existe un proceso Node.js ejecutándose en producción, deberá reiniciarse de acuerdo con el administrador de procesos utilizado por el servidor.

Comandos principales
Clonar
git clone https://github.com/jsimonmuniz-blip/defensoriapublica1.git
Entrar al proyecto
cd defensoriapublica1
Instalar dependencias
npm install
Desarrollo
npm run dev
Compilación de producción
npm run build
Previsualización
npm run preview
Actualizar desde GitHub
git pull
Revisar código con ESLint
npm run lint
Formatear código
npm run format
Archivos que NO deben subirse al repositorio

No subir manualmente:

node_modules/

También evitar publicar:

.env
.env.local

si contienen credenciales o información privada.

Las credenciales y secretos deben mantenerse fuera del repositorio.

Seguridad

Antes de publicar o entregar el proyecto, verificar que no existan:

Contraseñas.
Tokens privados.
API keys secretas.
Credenciales de bases de datos.
Credenciales de servidores.
Archivos .env con información sensible.
Información personal que no deba hacerse pública.

Si alguna credencial fue publicada accidentalmente en GitHub, debe considerarse comprometida y debe ser reemplazada o revocada.

No eliminar archivos o dependencias únicamente porque parezcan relacionados con una plataforma anterior.

Antes de eliminar cualquier dependencia o archivo, comprobar qué función desempeña dentro del proyecto.

Recomendaciones antes de modificar el proyecto

Antes de realizar cambios importantes:

Crear una nueva rama de Git.
Realizar los cambios.
Ejecutar:
npm install
Ejecutar:
npm run lint
Ejecutar:
npm run build
Comprobar que la aplicación funciona correctamente.
Después integrar los cambios a main.
Flujo recomendado de trabajo
GitHub
   │
   ▼
git clone
   │
   ▼
npm install
   │
   ▼
Configurar variables de entorno
   │
   ▼
npm run dev
   │
   ▼
Pruebas locales
   │
   ▼
npm run lint
   │
   ▼
npm run build
   │
   ▼
Configurar servidor Node.js
   │
   ▼
Configurar dominio y HTTPS
   │
   ▼
Pruebas en producción
Solución de problemas
npm no se reconoce como comando

Node.js no está instalado correctamente o no está disponible en el PATH del sistema.

Comprobar:

node -v
npm -v

Si alguno de los comandos no funciona, instalar Node.js LTS y volver a abrir la terminal.

npm install presenta errores

Comprobar:

node -v

y posteriormente:

npm install

Si el problema continúa, revisar el mensaje completo mostrado por npm.

No eliminar package-lock.json como primera solución.

npm run build presenta errores

Revisar:

Variables de entorno.
Dependencias.
Errores de TypeScript.
Configuración de Vite.
Configuración de TanStack Start.
APIs externas.

Ejecutar también:

npm run lint

para detectar posibles problemas en el código.

La aplicación funciona localmente pero no en producción

Revisar:

Versión de Node.js.
Variables de entorno.
Configuración del servidor.
Proceso Node.js.
Configuración del dominio.
HTTPS.
APIs externas.
Registros del servidor.
Consola del navegador.
Git y respaldo

El repositorio de GitHub funciona como repositorio principal del código fuente.

Antes de realizar modificaciones importantes se recomienda crear una rama:

git checkout -b nueva-funcionalidad

Después de realizar los cambios:

git add .
git commit -m "Descripción de los cambios"
git push origin nueva-funcionalidad

No realizar cambios directamente sobre main cuando se trate de modificaciones importantes sin haber realizado previamente una copia o rama de respaldo.

Información necesaria para una nueva instalación

La persona encargada de instalar el proyecto necesitará:

Acceso al repositorio GitHub.
Acceso al servidor.
Node.js compatible.
Acceso para configurar variables de entorno.
Información de las APIs externas utilizadas.
Credenciales de servicios externos, entregadas de manera segura.
Acceso al administrador del dominio/DNS.
Configuración SSL/HTTPS.

El código fuente por sí solo no necesariamente contiene las cuentas, bases de datos, APIs o servicios externos utilizados por la aplicación.

Importante

No modificar los siguientes archivos únicamente para intentar cambiar el funcionamiento del proyecto:

package.json
package-lock.json
vite.config.ts
tsconfig.json
src/server.ts
src/start.ts
src/router.tsx
src/routeTree.gen.ts

Estos archivos forman parte de la configuración y arquitectura de la aplicación.

Si se requiere modificar alguno, primero comprobar el efecto del cambio ejecutando:

npm run lint

y:

npm run build
Contacto y mantenimiento

El repositorio contiene el código fuente de la aplicación del Instituto de Defensoría Pública de Nuevo León.

Para cambios posteriores se recomienda mantener:

GitHub como repositorio principal.
main como versión estable.
Ramas independientes para modificaciones.
Variables de entorno fuera del repositorio.
Copias de seguridad antes de cambios importantes.
Fin del documento

Este README describe la instalación, desarrollo y preparación para producción del proyecto.

La configuración final del servidor debe adaptarse al proveedor de hosting utilizado y a la arquitectura de producción de TanStack Start/Nitro.
