-------- HOSPITAL SYSTEM TABLES -------
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
   sus_code VARCHAR(60) NOT NULL UNIQUE,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (id_user) REFERENCES users(id),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username)
);
