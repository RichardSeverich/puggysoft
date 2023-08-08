-- ------ ALCALDIA REGULARIZACION DE LOTES SYSTEM TABLES -------

CREATE TABLE alc_reg_lotes(
   id BIGINT AUTO_INCREMENT,
   nombre_cliente VARCHAR(256) NOT NULL,
   ci_cliente VARCHAR(30) NOT NULL,
   numero_inmueble VARCHAR(120) UNIQUE,
   monto VARCHAR(120) NOT NULL,
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