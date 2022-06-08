-- CREATE DATA BASES
CREATE DATABASE puggysoftdb;

-- DELETE DATA BASES
DROP DATABASE puggysoftdb;

-- SELECT ALL DATA: show all rows.
SELECT * FROM users;


-- SELECT ALL DATA: show all rows.
SELECT * FROM users;


-- DELETE ALL DATA: delete all rows
TRUNCATE TABLE users;


-- DELETE TABLE: detele the table.
DROP TABLE users;


-- PAGINATION
-- page = 1
-- size = 10
SELECT * FROM users LIMIT 1,10


-- COUNT ALL USERS
-- total_records/total records per page
SELECT COUNT(*) FROM users;


-- All products from specific sale by saleId.
SELECT * FROM products
INNER JOIN sales_products
ON products.id=sales_products.id_product
WHERE sales_products.id_sale = ?1;