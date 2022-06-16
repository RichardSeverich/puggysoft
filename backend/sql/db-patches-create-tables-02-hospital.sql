-------- HOSPITAL SYSTEM TABLES -------

-- hostpital
CREATE TABLE hospital(
   name TEXT NOT NULL,
   description TEXT NOT NULL,
   telephone TEXT NOT NULL,
   address TEXT NOT NULL,
   level INT NOT NULL,
   created_by VARCHAR(20),
   updated_by VARCHAR(20),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
);

-- Patients
CREATE TABLE hospital_patients_details(
   created_by VARCHAR(20),
   updated_by VARCHAR(20),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
);

-- Doctors
CREATE TABLE hospital_doctors_details(
   id BIGINT AUTO_INCREMENT,
   specialization VARCHAR(60) NOT NULL,
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
);

-- INSERT INTO hospital_resources (name, price_interval, created_by) VALUES ("cancha de basquet", "50", "micky");
CREATE TABLE hospital_resources(
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
-- INSERT INTO hospital_interval_time (name, start_time, end_time, created_by) VALUES ("5:00 a 6:00", '05:00:00', '06:00:00', "micky");
-- INSERT INTO hospital_interval_time (name, start_time, end_time, created_by) VALUES ("18:00 a 19:00", '18:00:00', '19:00:00', "micky");

CREATE TABLE hospital_interval_time (
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

CREATE TABLE hospital_bookings (
   id INT AUTO_INCREMENT,
   id_resource INT NOT NULL,
   id_hospital_interval_time INT NOT NULL,
   booking_date DATE NOT NULL,
   comments TEXT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_resource) REFERENCES hospital_resources(id),
   FOREIGN KEY (id_hospital_interval_time) REFERENCES hospital_interval_time(id),
   UNIQUE (id_resource, id_hospital_interval_time, booking_date),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
