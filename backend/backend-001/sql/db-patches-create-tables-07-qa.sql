-- ------ QUALITY ASSURANCE SYSTEM TABLES -------
-- Test and Bug
CREATE TABLE qa_test_cases(
   id BIGINT AUTO_INCREMENT,
   title TEXT NOT NULL,
   description TEXT NOT NULL,
   priority ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL,
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


CREATE TABLE qa_tags(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
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


CREATE TABLE qa_test_cases_tags(
   id BIGINT AUTO_INCREMENT,
   id_test_case BIGINT NOT NULL,
   tag_name VARCHAR(60) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_test_case) REFERENCES qa_test_cases(id),
   FOREIGN KEY (tag_name) REFERENCES qa_tags(name),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


CREATE TABLE qa_steps(
   id BIGINT AUTO_INCREMENT,
   title VARCHAR(60) NOT NULL UNIQUE,
   description TEXT NOT NULL,
   expected_result TEXT NOT NULL,
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


CREATE TABLE qa_test_cases_steps(
   id BIGINT AUTO_INCREMENT,
   id_test_case BIGINT NOT NULL,
   id_test_step BIGINT NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (id_test_case) REFERENCES qa_steps(id),
   FOREIGN KEY (id_test_step) REFERENCES qa_test_cases(id),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
