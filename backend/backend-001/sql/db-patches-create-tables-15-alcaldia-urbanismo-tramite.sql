-- ------ ALCALDIA SYSTEM TABLES -------

CREATE TABLE alc_urb_tramite(
   id BIGINT AUTO_INCREMENT,
   nombre VARCHAR(256) NOT NULL UNIQUE,
   nombre_corto VARCHAR(30) NOT NULL UNIQUE,
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

CREATE TABLE alc_urb_requisitos(
   id BIGINT AUTO_INCREMENT,
   nombre VARCHAR(256) NOT NULL UNIQUE,
   nombre_corto VARCHAR(30) NOT NULL UNIQUE,
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

CREATE TABLE alc_urb_tramite_requisitos(
   id BIGINT AUTO_INCREMENT,
   tramite_nombre_corto VARCHAR(30) NOT NULL,
   requisito_nombre_corto VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (tramite_nombre_corto) REFERENCES alc_urb_tramite(nombre_corto),
   FOREIGN KEY (requisito_nombre_corto) REFERENCES alc_urb_requisitos(nombre_corto),
   UNIQUE(tramite_nombre_corto, requisito_nombre_corto),   
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alc_urb_estados(
   id BIGINT AUTO_INCREMENT,
   nombre VARCHAR(256) NOT NULL UNIQUE,
   nombre_corto VARCHAR(30) NOT NULL UNIQUE,
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

CREATE TABLE alc_urb_tramite_flujo(
   id BIGINT AUTO_INCREMENT,
   tramite_nombre_corto VARCHAR(30) NOT NULL,
   estado_nombre_corto VARCHAR(30) NOT NULL,
   nombre_cliente VARCHAR(120) NOT NULL,
   ci_cliente VARCHAR(60) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (tramite_nombre_corto) REFERENCES alc_urb_tramite(nombre_corto),
   FOREIGN KEY (estado_nombre_corto) REFERENCES alc_urb_estados(nombre_corto),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alc_urb_tramite_flujo_requisitos(
   id BIGINT AUTO_INCREMENT,
   id_tramite_flujo BIGINT NOT NULL,
   requisito_nombre_corto VARCHAR(30) NOT NULL,
   estado ENUM('CUMPLIDO', 'INCUMPLIDO') NOT NULL,
   archivo_requisito LONGBLOB,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_tramite_flujo) REFERENCES alc_urb_tramite_flujo(id),
   FOREIGN KEY (requisito_nombre_corto) REFERENCES alc_urb_requisitos(nombre_corto),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE alc_urb_historial(
   id BIGINT AUTO_INCREMENT,
   id_tramite_flujo BIGINT NOT NULL,
   username VARCHAR(60) NOT NULL,
   estado_anterior VARCHAR(30) NOT NULL,
   estado_nuevo VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_tramite_flujo) REFERENCES alc_urb_tramite_flujo(id),
   FOREIGN KEY (estado_anterior) REFERENCES alc_urb_estados(nombre_corto),
   FOREIGN KEY (estado_nuevo) REFERENCES alc_urb_estados(nombre_corto),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
