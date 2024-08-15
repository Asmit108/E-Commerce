import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const stepParam = queryParams.get('step');
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = React.useState(parseInt(stepParam) || 1);
    const [address, setAddress] = React.useState({
        firstName: '',
        lastName: '',
        streetAddress: '',
        State: '',
        City: '',
        zipcode: '',
        mobile: ''
    });

    React.useEffect(() => {
        if (stepParam) {
            setActiveStep(parseInt(stepParam));
        }
    }, [stepParam]);

    const handleNext = () => {
        navigate(`/checkout?step=${activeStep + 1}`);
    };

    const handleBack = () => {
        navigate(`/checkout?step=${activeStep - 1}`);
    };

    return (
        <div className='px-10 lg:px-20 pt-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep - 1}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 1}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        <div className='mt-10'>
                            {activeStep === 2 ? (
                                <DeliveryAddressForm address={address} setAddress={setAddress} />
                            ) : (
                                <OrderSummary address={address} />
                            )}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}
