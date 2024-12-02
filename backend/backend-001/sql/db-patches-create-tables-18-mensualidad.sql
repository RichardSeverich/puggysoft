-- ------ MENSUALIDADES SYSTEM TABLES -------
CREATE TABLE mensualidad_curso(
    id BIGINT AUTO_INCREMENT,
    id_curso VARCHAR(120),
    id_grupo_producto VARCHAR(120),
    aux TEXT,
    tenant VARCHAR(30) NOT NULL,
    created_by VARCHAR(30),
    updated_by VARCHAR(30),
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(username),
    FOREIGN KEY (updated_by) REFERENCES users(username),
    FOREIGN KEY (tenant) REFERENCES tenants(short_name),
    PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
