-------- HOSPITAL SYSTEM TABLES -------

-- hostpital: tenant not being used yet
 /* CREATE TABLE hospital(
   id_tenant BIGINT NOT NULL UNIQUE,
   level INT NOT NULL,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   FOREIGN KEY (id_tenant) REFERENCES users(id),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
);*/

-- Doctors
CREATE TABLE hospital_doctors_details(
   id_user BIGINT NOT NULL UNIQUE,
   specialization VARCHAR(60) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username)
);

-- Patients:
CREATE TABLE hospital_patients_details(
   id_user BIGINT NOT NULL UNIQUE,
   sus_code text NOT NULL UNIQUE,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username)
);

-- INSERT INTO hospital_doctor_work_days (name, day_of_week, created_by) 
-- VALUES ("MONDAY", "micky");
-- VALUES ("WEDNESDAY", "micky");
-- VALUES ("FRIDAY", "micky");

CREATE TABLE hospital_doctor_work_days (
   day_of_week ENUM('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'),
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (day_of_week)
)AUTO_INCREMENT=1000;

-- INSERT INTO hospital_doctor_work_time (name, start_time, end_time, created_by) 
-- VALUES ("5:00 a 6:00", '05:00:00', '06:00:00', "micky");

CREATE TABLE hospital_doctor_work_time (
   id BIGINT AUTO_INCREMENT,
   name TEXT NOT NULL,
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

CREATE TABLE hospital_doctor_schedule (
   id_doctor BIGINT NOT NULL,
   id_work_days TEXT,
   id_work_time BIGINT,
   -- common
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_work_days) REFERENCES users(hospital_doctor_work_days),
   FOREIGN KEY (id_work_time) REFERENCES users(hospital_doctor_work_time),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE hospital_bookings (
   id BIGINT AUTO_INCREMENT,
   id_doctor_schedule BIGINT NOT NULL,
   comments TEXT NOT NULL,
   bookings_date DATE NOT NULL,
   -- common
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (id_doctor_schedule) REFERENCES hospital_doctor_schedule(id),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
