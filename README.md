PFI-entregafinal-node

API RESTful para la gestión de inventario de productos, construida con Node.js, Express y Firebase Firestore.

---

## Tecnologías Utilizadas

Este proyecto utiliza el siguiente stack tecnológico:

* **Lenguaje:** Node.js
* **Framework:** Express.js
* **Base de Datos:** Firebase Cloud Firestore (NoSQL, orientada a documentos)
* **Autenticación:** JSON Web Tokens (JWT)
* **Gestor de Paquetes:** npm

---

## Estructura de la Aplicación

La arquitectura de la API sigue un patrón de **Controlador-Servicio-Modelo (CSM)** para la separación de responsabilidades:

* `src/routes/`: Define las URI y los métodos HTTP (GET, POST, etc.) y delega la solicitud al controlador.
* `src/controllers/`: Recibe la solicitud del cliente, extrae datos (`req.body`, `req.params`) y llama a la capa de servicios.
* `src/services/`: Contiene la lógica de negocio, validaciones complejas y orquestación.
* `src/models/`: Encapsula la lógica de persistencia y la comunicación directa con Firestore.
* `src/middleware/`: Contiene la lógica transversal como `authentication.js`.

---

## Endpoints de la API

Esta sección detalla los métodos, rutas y funciones clave de la API. La base URL para todos los *endpoints* es `http://pfi-entregafinal-node.vercel.app/`.

### Requisitos de Seguridad

* Las rutas marcadas con **(Auth)** requieren que el cliente envíe un **JSON Web Token (JWT)** válido.
* El token debe incluirse en el encabezado `Authorization`.
    * **Formato del encabezado:** `Authorization: Bearer <tu_token_jwt>`

### Rutas de Autenticación y Gestión de Productos

| Método | Ruta (Endpoint) | Descripción | Requisito de Seguridad |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/login` | **Inicio de Sesión.** Envía las credenciales y devuelve un JWT si son válidas. | Pública |
| **GET** | `/api/products` | **Listar Productos.** Obtiene una lista de todos los productos disponibles en la base de datos. | Pública |
| **GET** | `/api/products/:id` | **Ver Producto.** Obtiene los detalles de un producto específico, identificado por su ID. | Pública |
| **POST** | `/api/products/create` | **Crear Producto.** Recibe los datos de un nuevo producto en el cuerpo (Body) y lo guarda en la base de datos. | **Sí** (Auth) |
| **DELETE** | `/api/products/:id` | **Eliminar Producto.** Elimina un producto de la base de datos, identificado por su ID. | **Sí** (Auth) |

---

## Configuración y Ejecución Local

Sigue estos pasos para levantar la API en tu entorno local.

### Prerequisitos

* Node.js (versión 18 o superior)
* npm (incluido con Node.js)
* Una cuenta de Firebase configurada.

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone [https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd [nombre-de-tu-repo]
    ```

2.  Instala las dependencias:
    ```bash
    npm install
    ```

3.  **Configuración de Variables de Entorno (.env)**

    Crea un archivo llamado **`.env`** en la raíz del proyecto y añade las siguientes variables, reemplazando los placeholders con tus credenciales de Firebase y tu clave secreta de JWT:

    ```env
    # Clave Secreta para firmar JWT
    JWT_SECRET_KEY="[TU_CLAVE_SECRETA_LARGA_AQUI]"
    
    # Configuración de Firebase Firestore (Obtenidas de la configuración del proyecto)
    FIREBASE_API_KEY="[TU_FIREBASE_API_KEY]"
    # ... otras variables de Firebase si las usas (AUTH_DOMAIN, PROJECT_ID, etc.)
    ```

### Ejecución

Ejecuta la aplicación:

```bash
npm start
