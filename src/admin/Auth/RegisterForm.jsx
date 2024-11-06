import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, register } from '../../State/Auth/Action'
import { store } from '../../State/store'

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)
 
  useEffect(()=>{
    if(jwt){
       dispatch(getUser())
    }
  },[jwt,auth.jwt])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password")
    }
    dispatch(register(userData))
    console.log(userData)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item sx={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete='first-name'
            />
          </Grid>
          <Grid item sx={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete='last-name'
            />
          </Grid>
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
              Register
            </Button>
          </Grid>

        </Grid>
      </form>

      <div className='flex justifiy-center flex-col items-center'>
        <p>if you already have account?</p>
        <Button onClick={() => navigate(`/admin/login`)} className='ml-5' size='small' style={{ backgroundColor: 'lightblue' }} >Login</Button>
      </div>
    </div>
  )
}

export default RegisterForm
