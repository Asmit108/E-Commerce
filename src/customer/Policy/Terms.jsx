import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Terms = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Terms and Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to our Terms and Conditions page. These terms and conditions outline the rules and regulations for the use of our website and services.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Acceptance of Terms
        </Typography>

        <Typography variant="body1" paragraph>
          By accessing or using our services, you agree to comply with and be bound by these terms and conditions. If you disagree with any part of the terms, you may not access the service.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Changes to Terms
        </Typography>

        <Typography variant="body1" paragraph>
          We reserve the right to modify these terms and conditions at any time. Any changes will be posted on this page, and your continued use of the service constitutes acceptance of those changes.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Intellectual Property Rights
        </Typography>

        <Typography variant="body1" paragraph>
          The content, layout, design, data, and graphics on this website are protected by intellectual property rights. You may not reproduce, distribute, or use any content from this website without our express written consent.
        </Typography>

        <Typography variant="h5" gutterBottom>
          User Responsibilities
        </Typography>

        <Typography variant="body1" paragraph>
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Prohibited Activities
        </Typography>

        <Typography variant="body1" paragraph>
          You agree not to engage in any activities that could harm the website or its users, including transmitting harmful code, hacking, or spamming.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Termination of Access
        </Typography>

        <Typography variant="body1" paragraph>
          We reserve the right to terminate your access to the website without notice if you violate these terms and conditions.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Limitation of Liability
        </Typography>

        <Typography variant="body1" paragraph>
          We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Governing Law
        </Typography>

        <Typography variant="body1" paragraph>
          These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions or concerns regarding these terms, please contact us at: <a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms;
