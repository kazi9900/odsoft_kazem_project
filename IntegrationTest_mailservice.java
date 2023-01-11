import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class MailServiceTest {

    @Test
    public void testSendEmail() {
        // Create an instance of the MailService class
        MailService mailService = new MailService(null);

        // Set up test input
        String subject = "Test Subject";
        String from = "sender@example.com";
        List<String> to = Arrays.asList("test@example.com");
        String message = "Test Message";

        // Call the SendEmail method and store the result
        boolean result = mailService.SendEmail(subject, from, to, message);

        // Verify that the method returns true
        assertTrue(result);
    }
}
