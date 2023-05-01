INSERT INTO res_schedule_work_days (id_schedule, work_day, created_by) VALUES
-- cancha dia
(1000, 'MONDAY', "adminreservation"),
(1000, 'TUESDAY', "adminreservation"),
(1000, 'WEDNESDAY', "adminreservation"),
(1000, 'THURSDAY', "adminreservation"),
(1000, 'FRIDAY', "adminreservation"),
(1000, 'SATURDAY', "adminreservation"),
(1000, 'SUNDAY', "adminreservation"),
-- cancha noche
(1001, 'MONDAY', "adminreservation"),
(1001, 'TUESDAY', "adminreservation"),
(1001, 'WEDNESDAY', "adminreservation"),
(1001, 'THURSDAY', "adminreservation"),
(1001, 'FRIDAY', "adminreservation"),
(1001, 'SATURDAY', "adminreservation"),
(1001, 'SUNDAY', "adminreservation"),
-- cancha
(1002, 'MONDAY', "adminreservation"),
(1002, 'TUESDAY', "adminreservation"),
(1002, 'WEDNESDAY', "adminreservation"),
(1002, 'THURSDAY', "adminreservation"),
(1002, 'FRIDAY', "adminreservation"),
(1002, 'SATURDAY', "adminreservation"),
(1002, 'SUNDAY', "adminreservation"),
-- hotel
(1003, 'MONDAY', "adminreservation"),
(1003, 'TUESDAY', "adminreservation"),
(1003, 'WEDNESDAY', "adminreservation"),
(1003, 'THURSDAY', "adminreservation"),
(1003, 'FRIDAY', "adminreservation"),
(1003, 'SATURDAY', "adminreservation"),
(1003, 'SUNDAY', "adminreservation"),
-- doctor
(1004, 'MONDAY', "adminreservation"),
(1004, 'WEDNESDAY', "adminreservation"),
(1004, 'FRIDAY', "adminreservation"),
(1004, 'SATURDAY', "adminreservation"),
-- mbros2
(1005, 'THURSDAY', "adminreservation"),
(1005, 'FRIDAY', "adminreservation"),
(1005, 'TUESDAY', "adminreservation"),
(1005, 'SATURDAY', "adminreservation");


INSERT INTO res_bookings (id_resource, id_interval_time, booking_date, comments, voucher, status, created_by) VALUES
(1000, 1000, '2022-12-23', 'RESERVA DE PRUEBA', NULL, 'DONE', "adminreservation"),
(1000, 1000, '2022-12-24', 'RESERVA DE PRUEBA', NULL, 'DONE', "adminreservation"),
(1000, 1000, '2023-12-24', 'RESERVA DE PRUEBA', NULL, 'IN-PROGRESS', "adminreservation");