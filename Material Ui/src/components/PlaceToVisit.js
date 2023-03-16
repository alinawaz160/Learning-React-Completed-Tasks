import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import place from './places';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles= makeStyles((theme) =>({
    root:{
        minHeight:'80vh',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }
}));
export default function(){
    const classes=useStyles();
    const checked=useWindowPosition('header');
    return(
        <div className={classes.root} id='place-to-visit'>
            <ImageCard place={place[0]} checked={checked}/>
            <ImageCard place={place[1]} checked={checked}/>
        </div>
    )
}