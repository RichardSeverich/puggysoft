-- ------ ESCUELA SYSTEM TABLES -------

CREATE TABLE escuela_cursos(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   gestion VARCHAR(10) NOT NULL,
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

CREATE TABLE escuela_materias(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   nota_maxima INT,
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

CREATE TABLE escuela_notas(
   id BIGINT AUTO_INCREMENT,
   name VARCHAR(60) NOT NULL UNIQUE,
   short_name VARCHAR(30) NOT NULL UNIQUE,
   porcentaje INT NOT NULL,
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

CREATE TABLE escuela_cursos_materias(
   id BIGINT AUTO_INCREMENT,
   curso VARCHAR(30) NOT NULL,
   materia VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (curso) REFERENCES escuela_cursos(short_name),
   FOREIGN KEY (materia) REFERENCES escuela_materias(short_name),
   UNIQUE (curso, materia),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE escuela_notas_materias(
   id BIGINT AUTO_INCREMENT,
   materia VARCHAR(30) NOT NULL,
   nota VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (materia) REFERENCES escuela_materias(short_name),
   FOREIGN KEY (nota) REFERENCES escuela_notas(short_name),
   UNIQUE (materia, nota),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE escuela_cursos_estudiantes(
   id BIGINT AUTO_INCREMENT,
   curso VARCHAR(30) NOT NULL,
   estudiante VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (curso) REFERENCES escuela_cursos(short_name),
   FOREIGN KEY (estudiante) REFERENCES users(username),
   UNIQUE (curso, estudiante),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE escuela_cursos_docentes(
   id BIGINT AUTO_INCREMENT,
   curso VARCHAR(30) NOT NULL,
   docente VARCHAR(30) NOT NULL,
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (curso) REFERENCES escuela_cursos(short_name),
   FOREIGN KEY (docente) REFERENCES users(username),
   UNIQUE (curso, docente),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;

CREATE TABLE escuela_calificaciones(
   id BIGINT AUTO_INCREMENT,
   curso VARCHAR(30) NOT NULL,
   materia VARCHAR(30) NOT NULL,
   estudiante VARCHAR(30) NOT NULL,
   nota VARCHAR(30) NOT NULL,
   nota_valor FLOAT(4,1),
   tenant VARCHAR(30) NOT NULL,
   creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
   update_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
   created_by VARCHAR(30),
   updated_by VARCHAR(30),
   FOREIGN KEY (created_by) REFERENCES users(username),
   FOREIGN KEY (updated_by) REFERENCES users(username),
   FOREIGN KEY (tenant) REFERENCES tenants(short_name),
   FOREIGN KEY (curso) REFERENCES escuela_cursos(short_name),
   FOREIGN KEY (materia) REFERENCES escuela_materias(short_name),
   FOREIGN KEY (estudiante) REFERENCES users(username),
   FOREIGN KEY (nota) REFERENCES escuela_notas(short_name),
   UNIQUE (curso, materia, estudiante, nota),
   PRIMARY KEY (id)
)AUTO_INCREMENT=1000;
