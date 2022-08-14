-- ------ USERS SYSTEM TABLES -------
-- Users
CREATE TABLE users(
   id BIGINT AUTO_INCREMENT,
   username VARCHAR(30) NOT NULL UNIQUE,
   password VARCHAR(30) NOT NULL,
   dni VARCHAR(30) NOT NULL UNIQUE,
   name VARCHAR(30) NOT NULL,
   second_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   second_last_name VARCHAR(30) NOT NULL,
   birth_date DATE NOT NULL,
   age INT NOT NULL,
   sex VARCHAR(10) NOT NULL,
   occupation VARCHAR(60) NOT NULL,
   telephone TEXT NOT NULL,
   address TEXT NOT NULL,
   email TEXT NOT NULL,
   active BOOLEAN NOT NULL,
   image LONGBLOB,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Roles
CREATE TABLE roles(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL UNIQUE,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation users-roles
CREATE TABLE users_roles(
   id BIGINT AUTO_INCREMENT,
   id_user BIGINT NOT NULL,
   id_role BIGINT NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (id_role) REFERENCES roles(id),
   UNIQUE (id_user, id_role),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


-- tenant not being used yet
CREATE TABLE tenant (
   id BIGINT AUTO_INCREMENT,
   name TEXT NOT NULL,
   description TEXT NOT NULL,
   telephone TEXT NOT NULL,
   address TEXT NOT NULL,
   image LONGBLOB,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


CREATE TABLE tenant_users (
   id BIGINT AUTO_INCREMENT,
   id_tenant BIGINT NOT NULL,
   id_user BIGINT NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_tenant) REFERENCES tenant(id),
   FOREIGN KEY (id_user) REFERENCES users(id),
   UNIQUE (id_user, id_role),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


CREATE TABLE system_properties (
   id BIGINT AUTO_INCREMENT,
   name TEXT NOT NULL,
   value TEXT NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
