import react from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PlaceToVisit from './components/PlaceToVisit';

const useStyles = makeStyles((theme) =>({
  root:{
    minHeight:'200vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/island.png'})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  }
}))
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header />
      <PlaceToVisit/>
    </div>
  );
}


