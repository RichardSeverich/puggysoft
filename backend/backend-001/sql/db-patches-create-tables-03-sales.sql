-- ------ SALES SYSTEM TABLES -------
-- Products
CREATE TABLE products(
   id BIGINT AUTO_INCREMENT,
   code TEXT,
   name TEXT NOT NULL,
   purchase_price DOUBLE NOT NULL,
   sale_price DOUBLE NOT NULL,
   stock BIGINT NOT NULL,
   description TEXT NOT NULL,
   image LONGBLOB,
   bar_code TEXT,
   location TEXT,
   minimum_stock BIGINT,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Clients
-- User with SALE_SELLER

-- status could be: IN-PROGRESS, DONE.
-- status: it is only utilized in restaurant mode.
-- status: it is always DONE in normal mode.
-- status: it is IN-PROGRESS when restaurant gives a ticket to a client.
-- status: it is DONE when restaurant deliver the product.


-- Sales
CREATE TABLE sales(
    id BIGINT AUTO_INCREMENT,
    client VARCHAR(30) NOT NULL,
    status VARCHAR(32) NOT NULL, -- IN-PROGRESS, DONE.
    note TEXT,
    total_price FLOAT(11,2),
    customer_cash FLOAT(11,2),
    customer_cash_change FLOAT(11,2),
    tenant VARCHAR(30) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(30),
    updated_by VARCHAR(30),
    FOREIGN KEY (tenant) REFERENCES tenants(short_name),
    FOREIGN KEY (created_by) REFERENCES users(username), -- Seller
    FOREIGN KEY (updated_by) REFERENCES users(username),
    FOREIGN KEY (client) REFERENCES users(username), -- Client
    PRIMARY KEY(id)
)AUTO_INCREMENT=1000;

-- Relation sales-products
CREATE TABLE sales_products(
    id BIGINT AUTO_INCREMENT,
    id_sale BIGINT NOT NULL,
    id_product BIGINT NOT NULL,
    quantity BIGINT NOT NULL,
    tenant VARCHAR(30) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(30),
    updated_by VARCHAR(30),
    FOREIGN KEY (tenant) REFERENCES tenants(short_name),
    FOREIGN KEY (created_by) REFERENCES users(username),
    FOREIGN KEY (updated_by) REFERENCES users(username),
    FOREIGN KEY (id_sale) REFERENCES sales(id),
    FOREIGN KEY (id_product) REFERENCES products(id),
    PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Products Groups
CREATE TABLE product_groups(
    id BIGINT AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    aux TEXT,
    image LONGBLOB,
    tenant VARCHAR(30) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(30),
    updated_by VARCHAR(30),
    FOREIGN KEY (tenant) REFERENCES tenants(short_name),
    FOREIGN KEY (created_by) REFERENCES users(username),
    FOREIGN KEY (updated_by) REFERENCES users(username),
    PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation Products Groups - Products
CREATE TABLE product_groups_products(
    id BIGINT AUTO_INCREMENT,
    id_product BIGINT NOT NULL,
    id_product_group BIGINT NOT NULL,
    aux TEXT,
    tenant VARCHAR(30) NOT NULL,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
    created_by VARCHAR(30),
    updated_by VARCHAR(30),
    FOREIGN KEY (tenant) REFERENCES tenants(short_name),
    FOREIGN KEY (created_by) REFERENCES users(username),
    FOREIGN KEY (updated_by) REFERENCES users(username),
    FOREIGN KEY (id_product) REFERENCES products(id),
    FOREIGN KEY (id_product_group) REFERENCES product_groups(id),
    UNIQUE (id_product, id_product_group)
)AUTO_INCREMENT=1000;
