import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import MapView from './MapView';
import ModalContent from './ModalContent';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class MarketingAnalyst extends Component {
  state = {
    crumbsList: 'USA',
    show: false,
    modalContent: ''
  };
  breadCrumbs(crumbs) {
    this.setState({crumbsList: crumbs});
  }
  handleClose() {
    this.setState({show: false, modalContent: ''});
  }
  handleShow = (modalContent, properties) => {
    this.setState(
      {
        show: true,
        modalContent: modalContent
      },
      () => {
        //
      }
    );
  };
  render() {
    return (
      <div>
        <div>
          <h1 className="page-header">Marketing Analyst</h1>

          <Typography color="textSecondary">{this.state.crumbsList}</Typography>
          <MuiThemeProvider>
            <MapView
              handleShow={(modalContent) => this.handleShow(modalContent)}
              breadCrumbs={(crumbs) => this.breadCrumbs(crumbs)}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default MarketingAnalyst;
