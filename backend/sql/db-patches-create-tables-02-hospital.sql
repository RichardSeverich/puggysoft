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

-- INSERT INTO hospital_doctor_time (id_doctor, name, start_time, end_time, available_date, tickets_number, created_by) VALUES (1000, "7:30 a 14:30", '14:30:00', '14:30:00', 20, "2022-06-20", "micky");
-- INSERT INTO hospital_doctor_time (id_doctor, name, start_time, end_time, available_date, tickets_number, created_by) VALUES (1000, "7:30 a 14:30", '14:30:00', '14:30:00', 10, "2022-06-22", "micky");
-- INSERT INTO hospital_doctor_time (id_doctor, name, start_time, end_time, available_date, tickets_number, created_by) VALUES (1000, "7:30 a 14:30", '14:30:00', '14:30:00', 30, "2022-06-22", "micky");

CREATE TABLE hospital_doctor_schedule (
   id BIGINT AUTO_INCREMENT,
   id_doctor BIGINT NOT NULL,
   name VARCHAR(12) NOT NULL,
   start_time TIME NOT NULL,
   end_time TIME NOT NULL,
   available_date DATE NOT NULL,
   tickets_number INT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (id_doctor) REFERENCES users(id),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;


CREATE TABLE hospital_bookings (
   id BIGINT AUTO_INCREMENT,
   id_doctor_schedule BIGINT NOT NULL,
   comments TEXT NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_doctor_schedule) REFERENCES hospital_doctor_schedule(id),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
