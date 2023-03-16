import React, { useState} from "react";
import { useFormik } from 'formik';
import { Grid, Box, Avatar, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import tempData from "./InitialTableData";
export default function FormComponent({ updateData, setData ,setOpen }) {
  var formik = useFormik({
    initialValues: {
      name: "",
      company: "",
      city: "",
      state: '',
    },
    onSubmit: values => {
      let row = {
        name:values.name,
        company:values.company,
        city:values.city,
        state:values.state,
        options: (
          <IconButton
            variant="outlined"
            onClick={() => {
              setOpen(true); 
              }
            }
          >
            <VisibilityIcon></VisibilityIcon>
          </IconButton>
        ),
        delete: (
          <IconButton
            variant="outlined"
            onClick={() => {
                
              }
            }>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        ),
      };      
      setData(row);
      setOpen(false);
    },
  })
  return (
    <Grid>
      <Paper elevation={8} >
        <DialogTitle id="rowDataHeading">{"RowData"}</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={8}>
            <Box p={1}>
              <TextField
                id="name"
                name="name"
                type="text"
                variant='outlined'
                label="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box p={1}>
              <TextField

                id="company"
                name="company"
                type="text"
                label="Company"
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box p={1}>
              <TextField
                id="city"
                name="city"
                type="text"
                label="City"
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box p={1}>
              <TextField
                id="state"
                name="state"
                type="text"
                label="State"
                variant='outlined'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
              />
            </Box>
          </Grid>
          <Grid item md={6} align="center">
            <Box>
              <Button variant="contained" color="primary" type="submit"
              >
                Save
              </Button>
            </Box>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}