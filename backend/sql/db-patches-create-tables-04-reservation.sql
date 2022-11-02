-- ------ RESERVATION SYSTEM TABLES -------
-- INSERT INTO resources (name, price_interval, created_by) VALUES ("cancha de basquet", "50", "micky");
CREATE TABLE res_resources(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   price_interval TEXT NOT NULL,
   image LONGBLOB,
   description TEXT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- resource_schedule
CREATE TABLE res_resource_schedule (
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(12) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- Relation res_resources with resource_schedule
CREATE TABLE res_resources_schedule (
   id BIGINT AUTO_INCREMENT,
   id_resource_schedule BIGINT NOT NULL,
   id_resource BIGINT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource_schedule) REFERENCES res_resource_schedule(id),
   FOREIGN KEY (id_resource) REFERENCES res_resources(id),
   UNIQUE (id_resource_schedule, id_resource),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

-- RESERVA POR HORA
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("5:00 a 6:00", '05:00:00', '06:00:00', "micky");
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("18:00 a 19:00", '18:00:00', '19:00:00', "micky");

-- RESERVA POR DIA
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("0:00 a 23:00", '00:00:00', '23:00:00', "micky");
-- INSERT INTO interval_time (name, start_time, end_time, created_by) VALUES ("0:00 a 23:00", '00:00:00', '23:00:00', "micky");

CREATE TABLE res_interval_time (
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(12) NOT NULL,
   start_time TIME NOT NULL,
   end_time TIME NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


-- Relation resource_schedule with interval_time
CREATE TABLE res_resource_schedule_interval_time (
   id BIGINT AUTO_INCREMENT,
   id_resource_schedule BIGINT NOT NULL,
   id_interval_time BIGINT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource_schedule) REFERENCES res_resource_schedule(id),
   FOREIGN KEY (id_interval_time) REFERENCES res_interval_time(id),
   UNIQUE (id_resource_schedule, id_interval_time),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


-- Relation resource_schedule with work_days 
CREATE TABLE res_resource_schedule_work_days (
   id BIGINT AUTO_INCREMENT,
   id_resource_schedule BIGINT NOT NULL,
   work_day ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY') NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource_schedule) REFERENCES res_resource_schedule(id),
   UNIQUE (id_resource_schedule, work_day),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


CREATE TABLE res_bookings (
   id INT AUTO_INCREMENT,
   id_resource BIGINT NOT NULL,
   id_interval_time BIGINT NOT NULL,
   booking_date DATE NOT NULL,
   comments TEXT NOT NULL,
   voucher LONGBLOB,
   status TEXT NOT NULL, -- IN-PROGRESS, DONE
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource) REFERENCES res_resources(id),
   FOREIGN KEY (id_interval_time) REFERENCES res_interval_time(id),
   UNIQUE (id_resource, id_interval_time, booking_date),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
