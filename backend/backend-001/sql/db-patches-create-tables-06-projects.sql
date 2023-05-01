-- ------ PROJECTS SYSTEM TABLES -------
-- Status
CREATE TABLE todo_status(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
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

-- Projects
CREATE TABLE todo_projects(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   status VARCHAR(30) NOT NULL,
   description TEXT NOT NULL,
   responsible VARCHAR(30),
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (responsible) REFERENCES users(username),
   FOREIGN KEY (status) REFERENCES todo_status(short_name),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Task
CREATE TABLE todo_tasks(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   project_short_name VARCHAR(30) NOT NULL,
   status VARCHAR(30) NOT NULL,
   description TEXT NOT NULL,
   responsible VARCHAR(30),
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (responsible) REFERENCES users(username),
   FOREIGN KEY (project_short_name) REFERENCES todo_projects(short_name),
   FOREIGN KEY (status) REFERENCES todo_status(short_name),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
