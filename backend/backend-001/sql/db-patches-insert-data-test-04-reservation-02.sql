DROP PROCEDURE IF EXISTS assignIntervalTimeToSchedule;

DELIMITER $$
CREATE PROCEDURE assignIntervalTimeToSchedule()
  BEGIN
    DECLARE idIntervalTime INT DEFAULT 1000;
    WHILE idIntervalTime <= 1011 DO
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1000, idIntervalTime, "adminreservation");
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1002, idIntervalTime, "adminreservation");
      SET idIntervalTime = idIntervalTime+1;
    END WHILE;
    WHILE idIntervalTime <= 1017 DO
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1001, idIntervalTime, "adminreservation");
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1002, idIntervalTime, "adminreservation");
      SET idIntervalTime = idIntervalTime+1;
    END WHILE;
    WHILE idIntervalTime <= 1019 DO
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1003, idIntervalTime, "adminreservation");
      SET idIntervalTime = idIntervalTime+1;
    END WHILE;
    WHILE idIntervalTime <= 1036 DO
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1004, idIntervalTime, "adminreservation");
      SET idIntervalTime = idIntervalTime+1;
    END WHILE;
    WHILE idIntervalTime <= 1053 DO
      INSERT INTO res_schedule_interval_time (id_schedule, id_interval_time, created_by) values (1005, idIntervalTime, "adminreservation");
      SET idIntervalTime = idIntervalTime+1;
    END WHILE;
END;
$$

CALL assignIntervalTimeToSchedule();
