import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, register } from '../../State/Auth/Action';

const LoginForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data=new FormData(event.currentTarget)
    const userData={
         email:data.get("email"),
         password:data.get("password")
    }
    console.log(userData);
    dispatch(login(userData))
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sx={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete='email'
            />
          </Grid>
          <Grid item sx={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete='password'
            />
          </Grid>
          <Grid item sx={12} sm={6}>
            <Button className='w-full' type='submit' variant='contained' size='large'>
              Sign in
            </Button>
          </Grid>

        </Grid>
      </form>

      <div className='flex justifiy-center flex-col items-center'>
        <p>if you don't have an account?</p>
        <Button onClick={() => navigate(`/admin/register`)} className='ml-5' size='small' style={{ backgroundColor: 'lightblue' }} >Register</Button>
      </div>
    </div>
  )
}

export default LoginForm
