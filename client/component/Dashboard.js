import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  card: {
    maxWidth: 300
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  btnCenter: {
    textAlign: 'center'
  },
  width:{
      width:'100%',
      margin:'0px !important',
  }
});

class Dashboard extends React.Component {
  state = {
    };

 

  render() {
    const {classes} = this.props;
    const card=[1,2,3];

    return (
      <div className={classes.root}>
        <Grid container spacing={8} className={classes.width} direction='row' justify='center' alignItems='center'>
        {card.map((e)=>
            <Grid key={e} item xs={3}  >
            <Card className={classes.card} >
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={<IconButton />}
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
            
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                  cup of frozen peas along with the mussels, if you like.
                </Typography>
                <Typography component="p" className={classes.btnCenter}>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Connect
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )} 
        <p style={{width:'50%'}}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
            Add 1 cup of frozen peas along with the mussels, if you like 
        </p>
        </Grid> 
       
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
