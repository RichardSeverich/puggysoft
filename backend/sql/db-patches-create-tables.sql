CREATE TABLE users(
   id INT AUTO_INCREMENT,
   username VARCHAR(10) NOT NULL UNIQUE,
   password VARCHAR(10) NOT NULL,
   dni VARCHAR(15) NOT NULL UNIQUE,
   name VARCHAR(50) NOT NULL,
   father_last_name VARCHAR(50) NOT NULL,
   mother_last_name VARCHAR(50) NOT NULL,
   birth_date DATE NOT NULL,
   telephone TEXT NOT NULL,
   address TEXT NOT NULL,
   email TEXT NOT NULL,
   type VARCHAR(10) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(10),
   updated_by VARCHAR(10),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

