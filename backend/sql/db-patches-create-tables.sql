-- ------ USERS SYSTEM TABLES -------
-- Users
CREATE TABLE users(
   id BIGINT AUTO_INCREMENT,
   username VARCHAR(10) NOT NULL UNIQUE,
   password VARCHAR(10) NOT NULL,
   dni VARCHAR(15) NOT NULL UNIQUE,
   name VARCHAR(50) NOT NULL,
   second_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   second_last_name VARCHAR(50) NOT NULL,
   birth_date DATE NOT NULL,
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



-- ------ SALES SYSTEM TABLES -------
-- Products
CREATE TABLE products(
   id BIGINT AUTO_INCREMENT,
   name TEXT NOT NULL,
   purchase_price DOUBLE NOT NULL,
   sale_price DOUBLE NOT NULL,
   stock BIGINT NOT NULL,
   description TEXT NOT NULL,
   image LONGBLOB,
   bar_code TEXT,
   location TEXT,
   minimum_stock BIGINT,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Clients
CREATE TABLE clients(
   id BIGINT AUTO_INCREMENT,
   dni VARCHAR(15) NOT NULL UNIQUE,
   name VARCHAR(50) NOT NULL,
   second_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   second_last_name VARCHAR(50) NOT NULL,
   birth_date DATE NOT NULL,
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

-- status could be: IN-PROGRESS, DONE.
-- status: it is only utilized in restaurant mode.
-- status: it is always DONE in normal mode.
-- status: it is IN-PROGRESS when restaurant gives a ticket to a client.
-- status: it is DONE when restaurant deliver the product.

-- Sales
CREATE TABLE sales(
    id BIGINT AUTO_INCREMENT,
    id_seller BIGINT NOT NULL,
    id_client BIGINT NOT NULL,
    sale_date DATE NOT NULL,
    status VARCHAR(32) NOT NULL, -- IN-PROGRESS, DONE.
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(10),
    updated_by VARCHAR(10),
    PRIMARY KEY(id),
    FOREIGN KEY (id_seller) REFERENCES users(id),
    FOREIGN KEY (id_client) REFERENCES clients(id)
)AUTO_INCREMENT=1000;

-- Relation sales-products
CREATE TABLE sales_products(
    id BIGINT AUTO_INCREMENT,
    id_sale BIGINT NOT NULL,
    id_product BIGINT NOT NULL,
    quantity BIGINT NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(10),
    updated_by VARCHAR(10),
    PRIMARY KEY (id),
    FOREIGN KEY (id_sale) REFERENCES sales(id),
    FOREIGN KEY (id_product) REFERENCES products(id)
)AUTO_INCREMENT=1000;

-- Products Groups
CREATE TABLE product_groups(
    id BIGINT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    image LONGBLOB,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(10),
    updated_by VARCHAR(10),
    PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation Products Groups - Products
CREATE TABLE product_groups_products(
    id_product BIGINT NOT NULL,
    id_product_group BIGINT NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(10),
    updated_by VARCHAR(10),
    FOREIGN KEY (id_product) REFERENCES products(id),
    FOREIGN KEY (id_product_group) REFERENCES product_groups(id),
    UNIQUE (id_product, id_product_group)
);

-------- RESERVATION SYSTEM TABLES -------
-- INSERT INTO resources (name, price_interval, created_by) VALUES ("cancha de basquet", "50", "micky");
CREATE TABLE resources(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   price_interval TEXT NOT NULL,
   image LONGBLOB,
   description TEXT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- RESERVA POR HORA
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("5:00 a 6:00", '05:00:00', '06:00:00', "micky");
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("18:00 a 19:00", '18:00:00', '19:00:00', "micky");

-- RESERVA POR DIA
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("1:00 a 23:00", '01:00:00', '23:00:00', "micky");
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("1:00 a 23:00", '01:00:00', '23:00:00', "micky");

CREATE TABLE interval_time (
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(12) NOT NULL,
   start_time TIME NOT NULL,
   end_time TIME NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE bookings (
   id INT AUTO_INCREMENT,
   id_resource INT NOT NULL,
   id_interval_time INT NOT NULL,
   booking_date DATE NOT NULL,
   comments TEXT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource) REFERENCES resources(id),
   FOREIGN KEY (id_interval_time) REFERENCES interval_time(id),
   UNIQUE (id_resource, id_interval_time, booking_date),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
