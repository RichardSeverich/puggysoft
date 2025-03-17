package com.puggysoft.services.system;

import com.puggysoft.entities.users.EntityUser;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class ServiceEmailSender {
  @Autowired
  private JavaMailSender mailSender;

  /**
  * Sends a simple email to the specified recipient.
  *
  * @param toEmail the recipient's email address
  * @param subject the subject of the email
  * @param body the body content of the email
  */
  public void sendSimpleEmail(String toEmail,
                              String subject,
                              String body
  ) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("fromemail@gmail.com");
    message.setTo(toEmail);
    message.setText(body);
    message.setSubject(subject);
    mailSender.send(message);
    System.out.println("Mail Send...");
  }

  private void sendVerificationEmail(EntityUser user, String siteURL)
      throws MessagingException, UnsupportedEncodingException {
    String toAddress = user.getEmail();
    String fromAddress = "Your email address";
    String senderName = "Your company name";
    String subject = "Please verify your registration";
    String content = "Dear [[name]],<br>"
        + "Please click the link below to verify your registration:<br>"
        + "<h3><a href=\"[[URL]]\" target=\"_self\">VERIFY</a></h3>"
        + "Thank you,<br>"
        + "Your company name.";

    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setFrom(fromAddress, senderName);
    helper.setTo(toAddress);
    helper.setSubject(subject);

    String userFullName = user.getName() + " " + user.getLastName();
    content = content.replace("[[name]]", userFullName);

    String verifyURL = siteURL + "/verify?code=" + user.getEmailVerificationCode();

    content = content.replace("[[URL]]", verifyURL);

    helper.setText(content, true);

    mailSender.send(message);

  }

}
