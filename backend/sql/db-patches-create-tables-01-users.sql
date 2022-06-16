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
   image LONGBLOB,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Roles
CREATE TABLE rols(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(30) NOT NULL,
   created_by VARCHAR(20),
   updated_by VARCHAR(20),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation users-rols
CREATE TABLE users_rols(
   id BIGINT AUTO_INCREMENT,
   id_user BIGINT NOT NULL,
   id_rol BIGINT NOT NULL,
   created_by VARCHAR(20),
   updated_by VARCHAR(20),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (id_rol) REFERENCES rols(id),
   UNIQUE (id_user, id_rol),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
