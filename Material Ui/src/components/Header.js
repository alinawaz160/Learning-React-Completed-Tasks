import react, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';
const useStyles = makeStyles((theme) =>({
    appBar:{
        background:"none",
    },
    appBarTitle:{
        flexGrow:'1',
    },
    appBarWrraper:{
        width:"80%",
        margin:'0 auto',
    },
    colorText:{
        color:'#5AFF3D',
    },
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        fontFamily:"Nunito",
    },
    title:{
        color:"#fff",
        fontSize:"3rem",
    },
    goDown:{
        color:"#5AFF3D",
        fontSize:"4rem",
    },
    icon:{
        color:"#fff",
        fontsize:"2rem",
    },
    container:{
        marginTop:"150px",
        textAlign:"center",
    },

}));
export default function App() {
  const classes = useStyles();
  const [checked , setChecked]=useState(false);
  useEffect(()=>{
        setChecked(true);
  },[])
  return (
            <div className={classes.root} id='header'>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrraper}>
                    <h1 className={classes.appBarTitle}>My
                        <span className={classes.colorText}>Island.</span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} { ...(checked ? {timeout: 1000} : {})} collapsedHeight={50}>  
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome to <br/>My<span className={classes.colorText}>Island. </span></h1>
                <Scroll to='place-to-visit' smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
            </div>
            </Collapse>  
            </div>
  );
}


