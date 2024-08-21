import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Refund = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Refund Policy
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for shopping with us. If you are not entirely satisfied with your purchase, we're here to help. Please review our refund policy below.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Returns
        </Typography>

        <Typography variant="body1" paragraph>
          You have [X] days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging and you need to have the receipt or proof of purchase.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Refunds
        </Typography>

        <Typography variant="body1" paragraph>
          Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
        </Typography>

        <Typography variant="body1" paragraph>
          If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within 5-7 working days, depending on your card issuer's policies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Late or Missing Refunds
        </Typography>

        <Typography variant="body1" paragraph>
          If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund yet, please contact us at <a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a>.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Shipping
        </Typography>

        <Typography variant="body1" paragraph>
          You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Contact Us
        </Typography>

        <Typography variant="body1" paragraph>
          If you have any questions on how to return your item to us, contact us at: <a href="mailto:asmitmbi100@gmail.com">asmitmbi100@gmail.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Refund;
