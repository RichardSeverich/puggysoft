-- ------ RECURSOS SYSTEM TABLES -------
CREATE TABLE alcaldia_recursos_municipales(
   id BIGINT AUTO_INCREMENT,
   codigo VARCHAR(30),
   codigo_auxiliar VARCHAR(30),
   name VARCHAR(120) NOT NULL,
   precio FLOAT(11,2) NOT NULL,
   talonario_movimiento INT,
   talonario_inicio INT,
   talonario_final INT,
   tipo ENUM('PADRE', 'HIJO') NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_recursos_municipales_grupo_para_reportes(
   id BIGINT AUTO_INCREMENT,
   id_recurso_municipal_padre BIGINT NOT NULL,
   id_recurso_municipal_hijo BIGINT NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_recurso_municipal_padre) REFERENCES alcaldia_recursos_municipales(id),
   FOREIGN KEY (id_recurso_municipal_hijo) REFERENCES alcaldia_recursos_municipales(id),
   UNIQUE (id_recurso_municipal_padre, id_recurso_municipal_hijo),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_recursos_municipales_venta(
   id BIGINT AUTO_INCREMENT,
   cliente_nombre TEXT NOT NULL,
   cliente_ci_nit TEXT NOT NULL,
   direccion VARCHAR(120) NOT NULL,
   nota VARCHAR(120) NOT NULL,
   venta_status ENUM('ACTIVO', 'ANULADO') NOT NULL,
   venta_precio_total FLOAT(11,2),
   cliente_dinero FLOAT(11,2),
   cliente_cambio FLOAT(11,2),
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_recursos_municipales_venta_detalle(
   id BIGINT AUTO_INCREMENT,
   id_recurso_municipal BIGINT NOT NULL,
   id_venta BIGINT NOT NULL,
   precio_unidad FLOAT(11,2),
   cantidad INT NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_venta) REFERENCES alcaldia_recursos_municipales_venta(id),
   FOREIGN KEY (id_recurso_municipal) REFERENCES alcaldia_recursos_municipales(id),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_timbres_descontinuados(
   id BIGINT AUTO_INCREMENT,
   codigo BIGINT  NOT NULL UNIQUE,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_actividades(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(120)  NOT NULL UNIQUE,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_recursos_municipales_actividades(
   id BIGINT AUTO_INCREMENT,
   id_actividades BIGINT NOT NULL,
   id_recurso_municipal BIGINT NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_actividades) REFERENCES alcaldia_actividades(id),
   FOREIGN KEY (id_recurso_municipal) REFERENCES alcaldia_recursos_municipales(id),
   UNIQUE (id_actividades, id_recurso_municipal),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alcaldia_recursos_valorados(
   id BIGINT AUTO_INCREMENT,
   codigo BIGINT  NOT NULL,
   codigo_auxiliar VARCHAR(30),
   name VARCHAR(120) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
