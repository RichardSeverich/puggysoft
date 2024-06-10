-- USERS
INSERT INTO users (username, password, dni, name, second_name, last_name, second_last_name, birth_date, age, sex, occupation, telephone, address, email, active, image, email_verified) VALUES ("admin", "admin123", "0000000", "Admin", "Admin", "Admin", "Admin", "1990-01-01", 25, 'MALE', 'Ing. Informatico', "76479009", "Av. Villazon km-5", "Admin@gmail.com", true, null, true);
INSERT INTO users (username, password, dni, name, second_name, last_name, second_last_name, birth_date, age, sex, occupation, telephone, address, email, active, image, created_by, email_verified) VALUES
("SysAdmin", "admin123", "1000001", "N/A", "N/A", "N/A", "N/A", "1990-01-01", 27, 'MALE', 'Ing. Sistemas', "60795090", "Av. Wiracocha", "SysAdmin@puggysoft.com", true, null, null, true),
("RecursosMunicipalesEncargado", "admin123", "1000018", "N/A", "N/A", "N/A", "N/A", "1990-01-01", 27, 'MALE', 'Ing. Sistemas', "60795090", "Av. Wiracocha", "RecursosMunicipalesEncargado@puggysoft.com", true, null, "SysAdmin",  true),
("RecursosMunicipalesAdmin", "admin123", "1000026", "N/A", "N/A", "N/A", "N/A", "1990-01-01", 27, 'MALE', 'Ing. Sistemas', "60795090", "Av. Wiracocha", "RecursosMunicipalesAdmin@puggysoft.com", true, null, "SysAdmin",  true);

-- ROLES
INSERT INTO roles (name, created_by) VALUES ("ADMIN", "SysAdmin");
INSERT INTO roles (name, created_by) VALUES ("ADMIN_USERS", "SysAdmin");
INSERT INTO roles (name, created_by) VALUES ("ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO", "SysAdmin");
INSERT INTO roles (name, created_by) VALUES ("ALCALDIA_RECURSOS_MUNICIPALES_CAJERO", "SysAdmin");
INSERT INTO roles (name, created_by) VALUES ("URBANISMO_ENCARGADO", "SysAdmin");

-- TENANTS
INSERT INTO tenants (name, short_name, status, description, created_by) VALUES ("COLCAPIRHUA", 'COLCAPIRHUA', 'ACTIVE', 'ALCALDIA DE COLCAPIRHUA', 'SysAdmin');

-- USERS - ROLES
INSERT INTO users_roles (id_user, id_role, created_by, tenant) VALUES
((select id from users where username='SysAdmin'), (select id from roles where name='ADMIN_USERS'), "ADMIN", "COLCAPIRHUA"),
((select id from users where username='RecursosMunicipalesEncargado'), (select id from roles where name='ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO'), "SysAdmin", "COLCAPIRHUA"),
((select id from users where username='RecursosMunicipalesAdmin'), (select id from roles where name='ADMIN_USERS'), "SysAdmin", "COLCAPIRHUA");

-- USERS - TENANTS
INSERT INTO tenants_users(username, tenant, created_by) VALUES
((select username from users where username='SysAdmin'),'COLCAPIRHUA', 'SysAdmin'),
((select username from users where username='RecursosMunicipalesEncargado'),'COLCAPIRHUA', 'SysAdmin'),
((select username from users where username='RecursosMunicipalesAdmin'),'COLCAPIRHUA', 'SysAdmin');

-- TENANTS - ROLES
INSERT INTO tenants_roles (role, tenant, created_by) VALUES
('ADMIN', 'COLCAPIRHUA', "SysAdmin"),
('ADMIN_USERS', 'COLCAPIRHUA', "SysAdmin"),
('ALCALDIA_RECURSOS_MUNICIPALES_ENCARGADO', 'COLCAPIRHUA', "SysAdmin"),
('ALCALDIA_RECURSOS_MUNICIPALES_CAJERO', 'COLCAPIRHUA', "SysAdmin"),
('URBANISMO_ENCARGADO', 'COLCAPIRHUA', "SysAdmin");
