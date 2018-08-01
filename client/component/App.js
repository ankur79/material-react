import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AppLayout from "./AppLayout"
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { withStyles } from "@material-ui/core/styles";
import L from "leaflet";
import GEOJSON from "../dataset/stateData.json";
import txs from "../dataset/texas.json";
import mi from "../dataset/michigan.json";
import michigan from "../dataset/michigan.json";
import county from "../dataset/country.json";
import stores from "../dataset/stores.json";

class App extends React.Component {

  render() {

    return (
      <AppLayout/>
    );
  }
}


export default App;
