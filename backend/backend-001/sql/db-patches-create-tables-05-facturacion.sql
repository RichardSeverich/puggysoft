-- ------ FACTURACION SYSTEM TABLES -------
CREATE TABLE fac_factura(
   id BIGINT AUTO_INCREMENT,
   number_authorization TEXT NOT NULL,
   bill_number TEXT NOT NULL,
   nit_client TEXT NOT NULL,
   date_purchased TEXT NOT NULL,
   dosage_key TEXT NOT NULL,
   control_code TEXT NOT NULL,
   purchase_amount TEXT NOT NULL,
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