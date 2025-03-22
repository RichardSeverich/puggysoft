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
   email_verified BOOLEAN NOT NULL,
   email_verification_code TEXT,
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
   name VARCHAR(60) NOT NULL UNIQUE,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   aux TEXT,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- tenant not being used yet
CREATE TABLE tenants (
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(64) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   status ENUM('ACTIVE', 'INACTIVE') NOT NULL,
   description TEXT,
   telephone TEXT,
   address TEXT,
   image LONGBLOB,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE tenants_users (
   id BIGINT AUTO_INCREMENT,
   username VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (username) REFERENCES users(username),
   UNIQUE (username, tenant),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation users-roles
CREATE TABLE users_roles(
   id BIGINT AUTO_INCREMENT,
   id_user BIGINT NOT NULL,
   id_role BIGINT NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (id_role) REFERENCES roles(id),
   UNIQUE (id_user, id_role, tenant),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE tenants_roles(
   id BIGINT AUTO_INCREMENT,
   role VARCHAR(60) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (role) REFERENCES roles(name),
   UNIQUE (role, tenant),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE system_properties (
   id BIGINT AUTO_INCREMENT,
   name TEXT NOT NULL,
   value TEXT NOT NULL,
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

CREATE TABLE app_files(
   id BIGINT AUTO_INCREMENT,
   archive LONGBLOB,
   aux TEXT NOT NULL,
   note TEXT NOT NULL,
   sis TEXT NOT NULL,
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
