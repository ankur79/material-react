import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect,BrowserRouter, Route, Switch} from 'react-router-dom';
import AppBar from './AppBar';
import NotFound from './NotFound';
import ProgressBar from './ProgressBar';
import MiniDrawer from './MiniDrawer';
import Dashboard from './Dashboard';
import PredictiveAnalyst from './PredictiveAnalyst';
import MarketingAnalyst from './MarketingAnalyst';
import SupplyChain from './SupplyChain';
import DataEngineer from './DataEngineer';

export class AppLayout extends React.Component {
  // static propTypes = {
  //   loading: PropTypes.bool.isRequired
  // };

  render() {
    // const {loading} = this.props;

    return (
      <section>
        <BrowserRouter>
        <MiniDrawer>
          <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/predictive-analyst" component={PredictiveAnalyst} />
            <Route path="/data-engineer" component={DataEngineer} />
            <Route path="/supply-chain" component={SupplyChain} />
            <Route path="/marketing-analyst" component={MarketingAnalyst} />
            <Route component={NotFound} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </MiniDrawer>
        </BrowserRouter>
      </section>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     loading: state.api.get('loading')
//   };
// }

export default AppLayout;
