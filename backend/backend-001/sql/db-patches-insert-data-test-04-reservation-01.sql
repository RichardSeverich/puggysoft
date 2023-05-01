INSERT INTO res_resources (name, price_interval, image, description, created_by) VALUES
-- Canchas deportivas
("fronton 1 dia", "20", null, "dia", "adminreservation"),
("fronton 1 noche", "30", null, "noche", "adminreservation"),
("raquet 1 dia", "20", null, "dia", "adminreservation"),
("requet 1 noche", "30", null, "noche", "adminreservation"),
("wally 1", "30", null, "", "adminreservation"),
-- Hotel
("Habitacion simple 1", "100", null, "", "adminreservation"),
("Habitacion simple 2", "100", null, "", "adminreservation"),
("Habitacion simple 3", "100", null, "", "adminreservation"),
("Habitacion doble 1", "150", null, "", "adminreservation"),
("Habitacion doble 2", "150", null, "", "adminreservation"),
("Habitacion doble 3", "150", null, "", "adminreservation"),
("Habitacion triple 1", "300", null, "", "adminreservation"),
("Habitacion triple 2", "300", null, "", "adminreservation"),
("Habitacion triple 3", "300", null, "", "adminreservation"),
-- doctor
("recurso doctor", "120", null, "doctor", "adminreservation"),
("recurso mbros2", "120", null, "mbros2", "adminreservation");

-- schedule
INSERT INTO res_schedule (name, created_by) VALUES
-- canchas
("horario cancha dia", "adminreservation"),
("horario cancha noche", "adminreservation"),
("horario cancha", "adminreservation"),
-- hotel
("horario hotel", "adminreservation"),
-- doctor
("horario doctor", "adminreservation"),
("horario mbros2", "adminreservation");

INSERT INTO res_resources_schedule (id_schedule, id_resource, created_by) VALUES
-- canchas
(1000, 1000, "adminreservation"),
(1000, 1002, "adminreservation"),
(1001, 1001, "adminreservation"),
(1001, 1003, "adminreservation"),
(1002, 1004, "adminreservation"),
-- hotel
(1003, 1005, "adminreservation"),
(1003, 1006, "adminreservation"),
(1003, 1007, "adminreservation"),
(1003, 1008, "adminreservation"),
(1003, 1009, "adminreservation"),
(1003, 1010, "adminreservation"),
(1003, 1011, "adminreservation"),
(1003, 1012, "adminreservation"),
(1003, 1013, "adminreservation"),
-- doctor
(1004, 1014, "adminreservation"),
(1005, 1015, "adminreservation");

INSERT INTO res_interval_time (name, start_time, end_time, created_by) VALUES
-- canchas
("6:00 a 7:00", '06:00:00', '07:00:00', "adminreservation"),
("7:00 a 8:00", '07:00:00', '08:00:00', "adminreservation"),
("8:00 a 9:00", '08:00:00', '09:00:00', "adminreservation"),
("9:00 a 10:00", '09:00:00', '10:00:00', "adminreservation"),
("10:00 a 11:00", '10:00:00', '11:00:00', "adminreservation"),
("11:00 a 12:00", '11:00:00', '12:00:00', "adminreservation"),
("12:00 a 13:00", '12:00:00', '13:00:00', "adminreservation"),
("13:00 a 14:00", '13:00:00', '14:00:00', "adminreservation"),
("14:00 a 15:00", '14:00:00', '15:00:00', "adminreservation"),
("15:00 a 16:00", '15:00:00', '16:00:00', "adminreservation"),
("16:00 a 17:00", '16:00:00', '17:00:00', "adminreservation"),
("17:00 a 18:00", '17:00:00', '18:00:00', "adminreservation"),
("18:00 a 19:00", '18:00:00', '19:00:00', "adminreservation"),
("19:00 a 20:00", '19:00:00', '20:00:00', "adminreservation"),
("20:00 a 21:00", '20:00:00', '21:00:00', "adminreservation"),
("21:00 a 22:00", '21:00:00', '22:00:00', "adminreservation"),
("22:00 a 23:00", '22:00:00', '23:00:00', "adminreservation"),
("23:00 a 00:00", '23:00:00', '00:00:00', "adminreservation"),
-- hotel
("14:00 a 00:00", '14:00:00', '00:00:00', "adminreservation"),
("00:00 a 14:00", '00:00:00', '14:00:00', "adminreservation"),
-- doctor
("6:00 a 6:30", '06:00:00', '06:30:00', "adminreservation"),
("6:30 a 7:00", '06:30:00', '07:00:00', "adminreservation"),
("7:00 a 7:30", '07:00:00', '07:30:00', "adminreservation"),
("7:30 a 8:00", '07:30:00', '08:00:00', "adminreservation"),
("8:00 a 8:30", '08:00:00', '08:30:00', "adminreservation"),
("8:30 a 9:00", '08:30:00', '09:00:00', "adminreservation"),
("9:00 a 9:30", '09:00:00', '09:30:00', "adminreservation"),
("9:30 a 10:00", '09:30:00', '10:00:00', "adminreservation"),
("10:00 a 10:30", '10:00:00', '10:30:00', "adminreservation"),
("10:30 a 11:00", '10:30:00', '11:00:00', "adminreservation"),
("11:00 a 11:30", '11:00:00', '11:30:00', "adminreservation"),
("11:30 a 12:00", '11:30:00', '12:00:00', "adminreservation"),
("12:00 a 12:30", '12:00:00', '12:30:00', "adminreservation"),
("12:30 a 13:00", '12:30:00', '13:00:00', "adminreservation"),
("13:00 a 13:30", '13:00:00', '13:30:00', "adminreservation"),
("13:30 a 14:00", '13:30:00', '14:00:00', "adminreservation"),
("14:00 a 14:30", '14:00:00', '14:30:00', "adminreservation"),
("14:30 a 15:00", '14:30:00', '15:00:00', "adminreservation"),
("15:00 a 15:30", '15:00:00', '15:30:00', "adminreservation"),
("15:30 a 16:00", '15:30:00', '16:00:00', "adminreservation"),
("16:00 a 16:30", '16:00:00', '16:30:00', "adminreservation"),
("16:30 a 17:00", '16:30:00', '17:00:00', "adminreservation"),
("17:00 a 17:30", '17:00:00', '17:30:00', "adminreservation"),
("17:30 a 18:00", '17:30:00', '18:00:00', "adminreservation"),
("18:00 a 18:30", '18:00:00', '18:30:00', "adminreservation"),
("18:30 a 19:00", '18:30:00', '19:00:00', "adminreservation"),
("19:00 a 19:30", '19:00:00', '19:30:00', "adminreservation"),
("19:30 a 20:00", '19:30:00', '20:00:00', "adminreservation"),
("20:00 a 20:30", '20:00:00', '20:30:00', "adminreservation"),
("20:30 a 21:00", '20:30:00', '21:00:00', "adminreservation"),
("21:00 a 21:30", '21:00:00', '21:30:00', "adminreservation"),
("21:30 a 22:00", '21:30:00', '22:00:00', "adminreservation"),
("22:00 a 22:30", '22:00:00', '22:30:00', "adminreservation"),
("22:30 a 23:00", '22:30:00', '23:00:00', "adminreservation");
