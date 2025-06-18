# java-spring-puggysoft

## Prerequisites 🔨

1. Install Windows 10
2. Install gradle-6.4.1
3. Install java 1.8.0_201
4. Install Mysql 5
5. Install Docker 19.03.8 (Optional)
6. Install MySQL Shell 8.0.33 ```https://dev.mysql.com/downloads/shell/```
7. Install DBeaver Community. ```https://dbeaver.io/```

Note see installers on: https://drive.google.com/drive/folders/1r2BjEkD81jj2xuj9UWdbCxU1tFeCDFN3

### Optional install mysql db in docker

0. Install Docker 19.03.8

1. Download docker mysql image:

```
docker pull mysql:5
```

2. Create and start container:

```
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=secret123 -p 3306:3306 mysql:5
```

4. Connect to mysql with any client:

```
user: root 
password: secret123
```

## Deploy 🚀

### Deploy Normal

0. Execute all queries from ```sql folder```.
1. Execute: ```gradlew build```
2. Configure: ```build/resources/main/application.properties```

3. Run app: Execute only one of the following commands: 
  * ```java -jar build/libs/java-spring-puggysoft.jar```
  * ```gradlew bootRun```

### Deploy Docker
0. Execute all queries from ```sql folder```.
- Execute backend-001/sql/db-init-mysqlsh.bat if you have MySQL Shell installed.
1. Execute: ```gradlew build```
2. Configure: ```build/resources/main/application.properties```

```
*server.address=0.0.0.0 # Bind all Docker Container 
*Mandatory: server.address=0.0.0.0
*recomended db host with ip.
```

3. create docker image

```
docker build -t java-spring-puggysoft:1.0 .
```

4. run container:

```
first time: docker run -d --name java-spring-puggysoft -p 8080:8080 java-spring-puggysoft:1.0
then: docker start java-spring-puggysoft
```

## Usage

### Swagger documentation
 
http://192.168.0.100:8080/swagger-ui.html

### Default Token: 

```
Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiZHZlcmExIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0V
SIl0sImlhdCI6MTYwMjEyMTQzMX0.Ee_NdiR3q2HY3nrjP4YY5B5sRs8udEjsZjTDqfT9MUAp8yxWTJ1FYmZZb-F50jeIyEqmQwSXlxejuadeFlI25Q
```

### API:

#### Login:

```
POST localhost:8080/api/v1/login

{
  "username": "admin",
  "password": "admin123"
  "token": "Bearer ..."
}
```

#### Users:

```
GET localhost:8080/api/v1/users
POST localhost:8080/api/v1/users
GET localhost:8080/api/v1/users/{id}
GET localhost:8080/api/v1/users/pagination?page=0&size=10
GET localhost:8080/api/v1/users/pagination/size/10
PUT localhost:8080/api/v1/users/{id}
DELETE localhost:8080/api/v1/users/{id}

{
  "id": 1010,
  "username": "lzimpson",
  "password": "cass222",
  "dni": "5928354",
  "name": "N/A",
  "secondName": null,
  "lastName": "Capry",
  "secondLastName": null,
  "birthDate": "1992-03-18",
  "telephone": "74874444",
  "address": "Av. Sheeba",
  "email": "Liza.Simpson@gmail.com",
  "image": null,
  "createdBy": "admin",
  "updatedBy": null,
  "creationDate": "2022-06-07T14:54:58.000+0000",
  "updateDate": null
}
```

* Filter
```
POST localhost:8080/api/v1/users/filter?page=0&size=10
POST localhost:8080/api/v1/users/filter/size/{pageSize}
POST localhost:8080/api/v1/users/filter/size/10

{
    "idCriteria": "",
    "idOperator": "TEXT_CONTAINS",
    "usernameCriteria": "",
    "usernameOperator": "TEXT_CONTAINS",
    "passwordCriteria": "",
    "passwordOperator": "NONE",
    "dniCriteria": "",
    "dniOperator": "TEXT_CONTAINS",
    "nameCriteria": "",
    "nameOperator": "TEXT_CONTAINS",
    "secondNameCriteria": "",
    "secondNameOperator": "TEXT_CONTAINS",
    "lastNameCriteria": "",
    "lastNameOperator": "TEXT_CONTAINS",
    "secondLastNameCriteria": "",
    "secondLastNameOperator": "TEXT_CONTAINS",
    "birthDateNameOperator": "DATE_EQUALS",
    "telephoneCriteria": "",
    "telephoneOperator": "TEXT_CONTAINS",
    "addressCriteria": "",
    "addressOperator": "TEXT_CONTAINS",
    "emailCriteria": "",
    "emailOperator": "TEXT_CONTAINS",
    "createdByCriteria": "",
    "createdByOperator": "TEXT_CONTAINS",
    "updatedByCriteria": "",
    "updatedByOperator": "TEXT_CONTAINS",
    "creationDateCriteria": "",
    "creationDateOperator": "DATE_EQUALS",
    "updateDateCriteria": "",
    "updateDateOperator": "DATE_EQUALS"
}
```

#### Products:

```
GET localhost:8080/api/v1/products
POST localhost:8080/api/v1/products
GET localhost:8080/api/v1/products/{id}
GET localhost:8080/api/v1/products/pagination?page=0&size=10
GET localhost:8080/api/v1/products/pagination/size/10
GET localhost:8080/api/v1/products/size
PUT localhost:8080/api/v1/products/{id}
DELETE localhost:8080/api/v1/products/{id}

{
  "id": 1010,
  "name": "Te Dharamsala",
  "purchasePrice": 15.0,
  "salePrice": 18.0,
  "stock": 39,
  "description": "",
  "image": null,
  "barCode": null,
  "location": "Estante 3, Nivel 3",
  "minimumStock": null,
  "createdBy": null,
  "updatedBy": null,
  "creationDate": "2022-06-07T14:55:24.000+0000",
  "updateDate": null
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/1001`
3. Commit your changes: `git commit -m 'feature/1001: Add some feature'`
4. Push to the branch: `git push origin feature/1001`
5. Submit a pull request.

## License

- Proprietary.

---


## Historial de pagos
> En la tabla `app_files` se guarda el comprobante de pago, el comprobante de pago lo puede subir unicamente el estudiante.  

> Relaciones imaginarias/ayuda:  
`product_groups.aux` = `escuela_cursos.shortName` crea un curso normal y curso para agrupar las cuotas de pago (productos)  
`sales.aux` = `escuela_cursos.id` para saber que cuotas de pago (products) quiro pagar en esta venta deacurdo al curso (product_group)  
`app_files.sis` = `sales.id` para guardar el comprobante de pago  
### Mensualidad (MENSUALIDAD_ENCARGADO)
- Adm. cuotas de pago:  
  - retistrar  
    > Se crea un nuevo registro en la tabla `products` con **stock inagotable (9999999)**  
    endpoint `api/v1/products/` -- method `POST`
    ```json
      {
        "name":"segunda cuota de pago para nuevo curso",
        "purchasePrice":0,
        "salePrice":"1200",
        "stock":9999999,
        "description":"2025-04-30",
        "createdBy":"SysMensualidadEncargado",
        "updatedBy":"SysMensualidadEncargado",
        "tenant":"EMPRESA_2"
      }
    ```
  - mostrar  
    endpoint `api/v1/products/filter?page=0&size=16` -- method `POST`
    - editar  
      seleccionar cuota de pago (produsts) -> editar  
      endpoint `api/v1/products/{idProduct}` -- method `PUT`
    - eliminar  
      endpoint `api/v1/products/{idProduct}` -- method `DELETE`
  - asignar cuota de pago (products) a un curso (product_groups)  
    seleccionar curso (product_groups) `api/v1/product-groups/filter?page=0&size=7` -- method `POST` ->  
    > Para relizar los siguientes registros/eliminaciones se trabaja con la tabla intermediaria (product_groups_products)
      - agregar cuotas de pago (products)
        endpoint `api/v1/product-groups-products` -- method `POST`
        ```json
          {
            "idProduct":1165,
            "idProductGroup":1037,
            "createdBy":"SysMensualidadEncargado",
            "tenant":"EMPRESA_2"
          }
        ```
      - eliminar cuotas de pago
        endpoint `api/v1/product-groups-products/{id_product_groups_products}` -- method `DELETE`
- Adm. cursos:  
  - registrar  
    > Se crea un nuevo registro en las tablas `product_groups` y `escuela_cursos`  
    estos tienen una relacion imaginaria que no se ve reflejada en la DB  
    `product_groups.aux` **(auxiliar)** <-> `escuela_cursos.shortName` **(codigo curso)**  
    endpoints `api/v1/product-groups/` - `api/v1/escuela-cursos/` -- methods `POST`
    ```json
      "product_groups":{
        "name":"nuevo curso",
        "aux":"122332",
        "tenant":"EMPRESA_2",
        "createdBy":"SysMensualidadEncargado",
        "updatedBy":"SysMensualidadEncargado"
      },
      "escuela_cursos":{
        "name":"nuevo curso",
        "shortName":"122332",
        "gestion":"2025",
        "tenant":"EMPRESA_2",
        "createdBy":"SysMensualidadEncargado",
        "updatedBy":"SysMensualidadEncargado"
      }
    ```
  - mostrar  
    > La lista de cursos que se muestra se optiene de la tabla `escuela_cursos`,  
    luego se optiene el `product_groups` de cada uno con un request independente al que se le manda el filter de `auxCriteria: {escuela_cursos.shortName}`.
    endpoints `api/v1/escuela-cursos/filter?page=0&size=7` - `api/v1/product-groups/filter?page=0&size=1` -- method `POST`
    - editar  
      seleccionar curso (escuela_cursos) -> editar  
      > al editar el curso se actualizan las tablas `product_groups` y `escuela_cursos`  
      endpoints `api/v1/product-groups/{id_product_groups}` - `api/v1/escuela-cursos/{id_escuela_cursos}` -- method `PUT`
    - eliminar  
      > Siguiendo la logica, debemos eliminar el curso de las tablas `product_groups` `escuela_cursos`  
      endpoint `api/v1/product-groups/{id_product_groups}` - `api/v1/escuela-cursos/{id_escuela_cursos}` -- method `DELETE`
- Adm. estudinates:  
  - registrar  
    > se obtiene el `id_role` para luego asignarlo de manera automatica al momento de registrar el usuario  
    endpoint `api/v1/role?roleName=SCHOOL_ESTUDIANTE` -- method `GET`  
    endpoints: 
      `api/v1/users/`  
      `api/v1/users-roles`  
      `api/v1/tenants-users`
    methods `POST`
    ```json
      "users": {
        "username":"estudiante",
        "password":"admin123",
        "dni":"32223233",
        "name":"joao",
        "secondName":"charly",
        "lastName":"mene",
        "secondLastName":"parede",
        "age":1,"sex":"MALE",
        "occupation":"estudiante",
        "birthDate":"2024-09-05",
        "telephone":"43332332",
        "address":"colca",
        "email":"estu@gmail.com",
        "active":true,
        "emailVerified":false,
        "createdBy":"SysMensualidadEncargado",
        "updatedBy":"SysMensualidadEncargado",
        "image":null
      },
      "users_roles": {
        "idUser":1138,
        "idRole":1021,
        "createdBy":"SysMensualidadEncargado",
        "tenant":"EMPRESA_2"
      },
      "tenants_users": {
        "username":"estudiante",
        "tenant":"EMPRESA_2",
        "createdBy":"SysMensualidadEncargado"
      }
    ```
  - mostrar:  
    > se obtiene el `role.id` para obtener los usuarios con el rol de `SCHOOL_ESTUDIANTE`,  
    luego se optiene la lista de estudiantes
    endpoints `api/v1/role?roleName=SCHOOL_ESTUDIANTE`- `api/v1/users/filter/with-roles-and-tenants?page=0&size=10&idRole={role.id}&tenant=EMPRESA_2` -- method `GET - POST`  
    seleccionar -> editar  
  - asignar cursos:  
    > obtenemos el `role.id` de `SCHOOL_ESTUDIANTE` para posteriormente obtener la lista de estudiantes (usuarios con el rol de `SCHOOL_ESTUDIANTE`)  
    endpoints `api/v1/role?roleName=SCHOOL_ESTUDIANTE` - `api/v1/users/filter/with-roles-and-tenants?page=0&size=10&idRole={role.id}&tenant=EMPRESA_2` -- methods `GET - POST`  
    seleccionar estudiante ->  
    asignar/quitar cursos a estudiantes  
    endpoints `api/v1/escuela-cursos-estudiantes` - `api/v1/escuela-cursos-estudiantes/{id_escula_cursos_estudiantes}` -- methods `POST - DELETE`
    ```json
      {
        "estudiante":"estudiante",
        "curso":"DCEI_V13",
        "createdBy":"SysMensualidadEncargado",
        "tenant":"EMPRESA_2"
      }
    ```
- Adm. pagos  
  - registrar:  
    - seleccionar estudiante ->
      > se obtiene el `role.id` para obtener los usuarios con el rol de `SCHOOL_ESTUDIANTE`,  
      luego se optiene la lista de estudiantes
      endpoints `api/v1/role?roleName=SCHOOL_ESTUDIANTE`- `api/v1/users/filter/with-roles-and-tenants?page=0&size=10&idRole={role.id}&tenant=EMPRESA_2` -- method `GET - POST`  
    - seleccionar curso ->  
      > Obtenemos los cursos a los que esta inscrito el estudiante
      endpoint `api/v1/escuela-cursos-estudiantes-basic/filter?page=0&size=7&estudiante={user.username}&contains=true` -- method `POST`  
      > se crea una venta `sales`  
      recuperamos los detalles de la nueva venta con el id que devuelve el post  
      endpoints `api/v1/sales/` - `api/v1/sales/1750` -- methods `POST - GET`
    - agregar/quitar cuota  ->
      endpoint `api/v1/sales-products` - `api/v1/sales-products/{sale_products.id}` -- methods `POST - DELETE`  
      ```json
        {
          "idSale":1758,
          "idProduct":1109,
          "quantity":1,
          "tenant":"EMPRESA_2"
        }
      ```
      tambien se puede modificar el estado de pago
  - mostrar:  
    - seleccionar pago ->  
      agregar/quitar cuota - cambiar estado de pago
- Adm. historial de pagos
  - historial de pagos de un estudiante por cursos:
    - seleccionar estudiante ->
      > se obtiene el `role.id` para obtener los usuarios con el rol de `SCHOOL_ESTUDIANTE`,  
      luego se optiene la lista de estudiantes
      endpoints `api/v1/role?roleName=SCHOOL_ESTUDIANTE`- `api/v1/users/filter/with-roles-and-tenants?page=0&size=10&idRole={role.id}&tenant=EMPRESA_2` -- method `GET - POST`
    - seleccionar curso ->  
      > Obtenemos los cursos a los que esta inscrito el estudiante
      endpoint `api/v1/escuela-cursos-estudiantes-basic/filter?page=0&size=7&estudiante={user.username}&contains=true` -- method `POST`  
    - Historial de pagos ->  
      > se optienen los datos necesarios para generar el historial de pagos del estudiante  
      endpoint `api/v1/history-by-student-curse?courseName={cursos.name}&idCourse={cursos.id}&studentUsername={user.username}`  
  - Reporte de curso:
    - seleccionar curso ->  
      > Obtenemos los cursos  
      endpoint `api/v1/escuela-cursos/filter?page=0&size=7` -- method `POST`   
    - Reporte pagos ->  
      > se optienen los datos necesarios para generar el Reporte de pagos de los estudiantes  
      endpoint `api/v1/history-course?courseShortName={cursos.short_name}&courseId={cursos.id}` 

### Estudiante (SCHOOL_ESTUDIANTE)
- Adm. pagos
  - registrar:  
    - seleccionar curso ->   
      > Obtenemos los cursos a los que esta inscrito el estudiante
      endpoint `api/v1/escuela-cursos-estudiantes-basic/filter?page=0&size=7&estudiante={user.username}&contains=true` -- method `POST`  
      > se crea una venta `sales`  
      recuperamos los detalles de la nueva venta con el id que devuelve el post  
      endpoints `api/v1/sales/` - `api/v1/sales/1750` -- methods `POST - GET`
    - agregar/quitar cuota  ->
      endpoint `api/v1/sales-products` - `api/v1/sales-products/{sale_products.id}` -- methods `POST - DELETE`  
      ```json
        {
          "idSale":1758,
          "idProduct":1109,
          "quantity":1,
          "tenant":"EMPRESA_2"
        }
      ```
      tambien se puede modificar el comprobante
  - mostrar:  
    - seleccionar pago ->  
      agregar/quitar cuota - cambiar/agragar comprobante  
- Adm. historial de pagos  
  - historial de pagos de un estudiante por cursos:
    - seleccionar estudiante ->
      > se obtiene el `role.id` para obtener los usuarios con el rol de `SCHOOL_ESTUDIANTE`,  
      luego se optiene la lista de estudiantes
      endpoints `api/v1/role?roleName=SCHOOL_ESTUDIANTE`- `api/v1/users/filter/with-roles-and-tenants?page=0&size=10&idRole={role.id}&tenant=EMPRESA_2` -- method `GET - POST`
    - seleccionar curso ->  
      > Obtenemos los cursos a los que esta inscrito el estudiante
      endpoint `api/v1/escuela-cursos-estudiantes-basic/filter?page=0&size=7&estudiante={user.username}&contains=true` -- method `POST`  
    - Historial de pagos ->  
      > se optienen los datos necesarios para generar el historial de pagos del estudiante  
      endpoint `api/v1/history-by-student-curse?courseName={cursos.name}&idCourse={cursos.id}&studentUsername={user.username}`
