import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Shipping = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Shipping Policy
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for visiting and shopping at our store. Following are the terms and conditions that constitute our Shipping Policy.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Domestic Shipping Policy
        </Typography>

        <Typography variant="body1" paragraph>
          All orders are processed within 4 business days. Orders are not shipped or delivered on weekends or holidays.
        </Typography>

        <Typography variant="body1" paragraph>
          If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Shipping Rates & Delivery Estimates
        </Typography>

        <Typography variant="body1" paragraph>
          Shipping charges for your order will be calculated and displayed at checkout.
        </Typography>

        <Typography variant="body1" paragraph>
          The estimated delivery time is between 1 and 4 days from the date of shipment. Delivery delays can occasionally occur.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Shipment to P.O. Boxes or APO/FPO Addresses
        </Typography>

        <Typography variant="body1" paragraph>
          Our store ships to addresses within India and does not ship to P.O. boxes or APO/FPO addresses.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Shipment Confirmation & Order Tracking
        </Typography>

        <Typography variant="body1" paragraph>
          You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Customs, Duties, and Taxes
        </Typography>

        <Typography variant="body1" paragraph>
          Our store is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
        </Typography>

        <Typography variant="h5" gutterBottom>
          Damages
        </Typography>

        <Typography variant="body1" paragraph>
          Our store is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
        </Typography>

        <Typography variant="body1" paragraph>
          Please save all packaging materials and damaged goods before filing a claim.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions about our Shipping Policy, contact us at: <a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Shipping;
