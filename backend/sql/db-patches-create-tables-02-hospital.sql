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

