INSERT INTO todo_status (name, short_name, tenant, created_by) VALUES
-- Todo Status
("POR HACER", "POR_HACER", "EMPRESA_1", "SysProyectosAdmin"),
("EN PROGRESO", "EN_PROGRESO", "EMPRESA_1", "SysProyectosAdmin"),
("EN REVISION", "EN_REVISION", "EMPRESA_1", "SysProyectosAdmin"),
("TERMINADO", "TERMINADO", "EMPRESA_1", "SysProyectosAdmin");


-- Todo Project
INSERT INTO todo_projects (name, short_name, status, description, responsible, tenant, created_by) VALUES
("Proyecto1", "Pro1", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto2", "Pro2", "EN_REVISION", "terminado","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto3", "Pro3", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto4", "Pro4", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto5", "Pro5", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto6", "Pro6", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto7", "Pro7", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto8", "Pro8", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto9", "Pro9", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto10", "Pro10", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto11", "Pro11", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto12", "Pro12", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto13", "Pro13", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto14", "Pro14", "EN_REVISION", "terminado","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto15", "Pro15", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto16", "Pro16", "POR_HACER", "inicio", "SysProyectosAdmin","EMPRESA_1", "SysProyectosAdmin"),
("Proyecto17", "Pro17", "EN_REVISION", "terminado","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto18", "Pro18", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto19", "Pro19", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto20", "Pro20", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Proyecto21", "Pro21", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto22", "Pro22", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto23", "Pro23", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto24", "Pro24", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto25", "Pro25", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto26", "Pro26", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto27", "Pro27", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto28", "Pro28", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Proyecto29", "Pro29", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin");

-- Tasks
INSERT INTO todo_tasks (name, short_name, project_short_name, status, description, responsible, tenant, created_by) VALUES

("Tarea1", "Task1", "Pro1", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea2", "Task2", "Pro1", "EN_REVISION", "terminado","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea3", "Task3", "Pro1", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea4", "Task4", "Pro2", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea5", "Task5", "Pro2", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea6", "Task6", "Pro2", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea7", "Task7", "Pro27", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea8", "Task8", "Pro27", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea9", "Task9", "Pro9", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea10", "Task10", "Pro9", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea11", "Task11", "Pro9", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea12", "Task12", "Pro9", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea13", "Task13", "Pro9", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea14", "Task14", "Pro9", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea15", "Task15", "Pro9", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea16", "Task16", "Pro9", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea17", "Task17", "Pro16", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea18", "Task18", "Pro16", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea19", "Task19", "Pro16", "POR_HACER", "inicio", "SysProyectosAdmin","EMPRESA_1", "SysProyectosAdmin"),
("Tarea20", "Task20", "Pro16", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea21", "Task21", "Pro16", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea22", "Task22", "Pro18", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea23", "Task23", "Pro18", "EN_REVISION", "terminado","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea24", "Task24", "Pro18", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea25", "Task25", "Pro18","POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea26", "Task26", "Pro21","POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea27", "Task27", "Pro27", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea28", "Task28", "Pro27", "POR_HACER", "inicio","SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea29", "Task29", "Pro27", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"),
("Tarea30", "Task30", "Pro9", "EN_REVISION", "terminado", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin"), 
("Tarea31", "Task31", "Pro9", "POR_HACER", "inicio", "SysProyectosAdmin", "EMPRESA_1", "SysProyectosAdmin");
