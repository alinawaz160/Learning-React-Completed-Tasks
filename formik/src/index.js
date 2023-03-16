import {useState} from 'react';
import reactDom from 'react-dom/client';
import { Grid, Box, Avatar } from '@material-ui/core';
import { useFormik ,ErrorMessage} from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import * as Yup from 'yup';
import ReceiptPrint from './ReceiptPrint/ReactToPrint';
function MyApp() {
  var formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Password is required')
      .min(8, 'Must be 8 characters or greater')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "One Uppercase, One Lowercase, One Number and one special case Character"
      )
      ,
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    }),
  });
  
  var paperStyle={
    padding :20
  }
  var [showPassword, setShowPassword] = useState(false);
  var handleClickShowPassword = () => setShowPassword(!showPassword);
  var handleMouseDownPassword = () => setShowPassword(!showPassword);
  var [showPassword2, setShowPassword2] = useState(false);
  var handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
  var handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);
  return (
      <div style={{display:"flex",alignItems:"center" ,flexDirection:"column"}}>
        <div style={{display:"flex",flexDirection:"column" , width:"25%" ,marginTop:"30px"}}>
          <Grid align="center">
            <Paper elevation={20} style={paperStyle}> 
               <form onSubmit={formik.handleSubmit}>
                <Grid >
                  <Avatar>
                    <AccountCircleIcon></AccountCircleIcon>
                  </Avatar>
                  <h3>Create Account</h3>
                </Grid>
                <Grid item xs={8}>
                  <Box p={1}>
                    <TextField
                      id="firstName"
                      name="firstName"
                      type="text"
                      label="First name *"
                      variant="outlined"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      error={formik.touched.firstName && formik.errors.firstName }
                      helperText={formik.touched.firstName && formik.errors.firstName }
                    />
                                      
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box p={1}>
                    <TextField
                      variant="outlined"
                      id="lastName"
                      name="lastName"
                      type="text"
                      label="Last Name *"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                      error={formik.touched.lastName&& formik.errors.lastName }
                      helperText={formik.touched.lastName&& formik.errors.lastName}
                    />
                    <br />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box  p={1}>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      variant="outlined"
                      label="Email *"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email&& formik.errors.email}
                      helperText={formik.touched.email&& formik.errors.email}
                    />
                    <br/>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box p={1}>
                    <TextField
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      label="Password *"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      error={formik.touched.password && formik.errors.password }
                      helperText={formik.touched.password && formik.errors.password }
                      InputProps={{ // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    /><br/>
                  </Box>
                </Grid>
                <Grid item xs={10}>
                  <Box  p={1}>
                    {/* <label htmlFor="confirmPassword"><strong>Confirm Password:</strong></label> */}
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"

                      type={showPassword ? "text" : "password"}
                      variant="outlined"
                      label="Password *"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      onBlur={formik.handleBlur}
                      error={formik.values.confirmPassword != formik.values.confirmPassword}
                      helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    /><br/>     
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box>
                    <Button variant="contained" color="primary" type="submit">
                      Sign Up
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Paper>
          </Grid>  
         </div>  
        </div>     
  )
}

var root = reactDom.createRoot(document.getElementById("root"));
root.render(<MyApp />)
