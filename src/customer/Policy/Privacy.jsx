import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Privacy= () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to our Privacy Policy page. When you use our services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Information We Collect
        </Typography>

        <Typography variant="body1" paragraph>
          We collect information to provide better services to all our users. The information we collect, and how that information is used, depends on how you use our services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Personal Information
        </Typography>

        <Typography variant="body1" paragraph>
          When you sign up for our services, we may ask for personal information such as your name, email address, phone number, and payment information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Usage Information
        </Typography>

        <Typography variant="body1" paragraph>
          We collect information about how you use our services, such as the types of content you view or engage with, the features you use, the actions you take, and the time, frequency, and duration of your activities.
        </Typography>

        <Typography variant="h5" gutterBottom>
          How We Use Information
        </Typography>

        <Typography variant="body1" paragraph>
          We use the information we collect from all our services for the following purposes:
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Provide and Maintain Services
        </Typography>

        <Typography variant="body1" paragraph>
          We use the information to deliver our services, process transactions, provide customer support, and improve the overall performance of our services.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Communicate with You
        </Typography>

        <Typography variant="body1" paragraph>
          We may use your information to send you service notifications, marketing communications, or other communications that may be of interest to you.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Sharing Your Information
        </Typography>

        <Typography variant="body1" paragraph>
          We do not share personal information with companies, organizations, or individuals outside of our company unless one of the following circumstances applies:
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. With Your Consent
        </Typography>

        <Typography variant="body1" paragraph>
          We will share personal information with companies, organizations, or individuals outside of our company when we have your consent to do so.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. For Legal Reasons
        </Typography>

        <Typography variant="body1" paragraph>
          We will share personal information if we believe in good faith that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Changes to This Policy
        </Typography>

        <Typography variant="body1" paragraph>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Privacy;
