import React, { useEffect } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';
import { useDispatch, useSelector } from 'react-redux';

const DeliveryAddressForm = ({ address, setAddress }) => {
    const navigate = useNavigate();
    const { order } = useSelector(store => store);
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const updatedAddress = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            state: data.get("state"),
            city: data.get("city"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        };
        setAddress(updatedAddress);
        await dispatch(createOrder(updatedAddress));
    };

    useEffect(() => {
        if (order.order) {
            console.log(order.order);
            navigate(`/checkout?step=3&orderId=${order.order._id}`);
        }
    }, [order.order, navigate]);

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={7} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip Code"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Mobile"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                            </Grid>
                            <Button sx={{ mt: 2, bgcolor: "blue" }}
                                type="submit" variant="contained" size="large">
                                Deliver Here
                            </Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeliveryAddressForm;
