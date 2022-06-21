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



-- ******* PAGINATION *******
-- page = 1
-- size = 10
-- total_rows = 20
-- off = (page - 1)*size;
SELECT * FROM users LIMIT off, size

-- page 1
SELECT * FROM users LIMIT 0,10
-- page 2
SELECT * FROM users LIMIT 10,10
-- page 3
SELECT * FROM users LIMIT 20,10


-- COUNT ALL USERS
-- total_records/total records per page
SELECT COUNT(*) FROM users;


-- All products from specific sale by saleId.
SELECT * FROM products
INNER JOIN sales_products
ON products.id=sales_products.id_product
WHERE sales_products.id_sale = ?1;


-- FILTER TEXT EXAMPLE
select * from users
WHERE 
id LIKE '%%' AND 
username LIKE '%%' AND
dni LIKE '%%' AND
name LIKE '%%' AND
second_name LIKE '%%' AND
last_name LIKE '%%' AND
second_last_name LIKE '%%' AND
birth_date LIKE '%%' AND
telephone LIKE '%%' AND
address LIKE '%%' AND
email LIKE '%%'  AND 
creation_date LIKE '%%' OR creation_date = NULL AND
update_date LIKE '%%' OR update_date = NULL AND
created_by LIKE '%%' OR created_by = NULL AND
updated_by LIKE '%%' OR updated_by = NULL
LIMIT 0,10;

-- COUNT WITH FILTER EXAMPLE
select COUNT(*) from users
WHERE 
id LIKE '%%' AND 
username LIKE '%%' AND
dni LIKE '%%' AND
name LIKE '%%' AND
second_name LIKE '%%' AND
last_name LIKE '%%' AND
second_last_name LIKE '%%' AND
birth_date LIKE '%%' AND
telephone LIKE '%%' AND
address LIKE '%%' AND
email LIKE '%%'  AND 
creation_date LIKE '%%' OR creation_date = NULL AND
update_date LIKE '%%' OR update_date = NULL AND
created_by LIKE '%%' OR created_by = NULL AND
updated_by LIKE '%%' OR updated_by = NULL;

-- DATE INTERVAL
SELECT *
FROM users
WHERE (creation_date BETWEEN '2010-01-30 14:15:55' AND '2010-09-29 10:15:55')

-- DATE INTERVAL
-- START DATE: INCLUDE
-- END DATE: NOT INCLUDED
SELECT *
FROM users
WHERE (creation_date BETWEEN '2022-05-05' AND '2022-07-08')



-- ******* GET ROLES BY USER_ID *******
SELECT roles.*
FROM roles
INNER JOIN users_roles ON users_roles.id_role=roles.id 
WHERE users_roles.id_user = 1001;


-- ******* GET ROLES BY USERNAME *******
SELECT roles.*
FROM roles
INNER JOIN users_roles ON users_roles.id_role=roles.id 
INNER JOIN users ON users_roles.id_user =users.id 
WHERE users.username = 'admin';
