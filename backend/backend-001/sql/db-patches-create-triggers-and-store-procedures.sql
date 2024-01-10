-- CREATE SYSTEM PROPERTIES WHEN NEW TENANT IS CREATED
DROP PROCEDURE IF EXISTS createSystemPropertiesForNewTenant;

DELIMITER $$
CREATE PROCEDURE createSystemPropertiesForNewTenant(IN tenantName VARCHAR(30))
  BEGIN
    INSERT INTO system_properties (name,value,tenant,created_by) values ('SYS_AUTO_USER_REG','FALSE',tenantName, 'admin');
    INSERT INTO system_properties (name,value,tenant,created_by) values ('SYS_SALE_BILLING','FALSE',tenantName, 'admin');
    INSERT INTO system_properties (name,value,tenant,created_by) values ('SYS_LOGIN_EMAIL_VERIFIED_REQUIRED','FALSE',tenantName, 'admin');
  END; $$
DELIMITER ;

DROP TRIGGER IF EXISTS triggerCreateSystemPropertiesForNewTenant;
DELIMITER $$
CREATE TRIGGER triggerCreateSystemPropertiesForNewTenant
    AFTER INSERT ON tenants FOR EACH ROW
    CALL createSystemPropertiesForNewTenant(NEW.short_name) $$
DELIMITER ;

-- GENERATE USER EMAIL VERIFICATION CODE
DROP TRIGGER IF EXISTS triggerGenerateEmailVerificationCode;
DELIMITER $$
CREATE TRIGGER triggerGenerateEmailVerificationCode
    BEFORE INSERT ON users FOR EACH ROW
    BEGIN
      SET NEW.`email_verification_code` = UUID();
    END$$
DELIMITER ;
