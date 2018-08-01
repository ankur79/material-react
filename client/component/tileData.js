
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CardTravel from '@material-ui/icons/CardTravel';
import LocalShipping from '@material-ui/icons/LocalShipping';




import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {Link} from 'react-router-dom';

import Dashboard from './Dashboard';
import PredictiveAnalyst from './PredictiveAnalyst';
// import MarketingAnalyst from '../containers/MarketingAnalyst';
import SupplyChain from './SupplyChain';
import DataEngineer from './DataEngineer';


export const mailFolderListItems = (
  <div>
    <ListItem button  component={Link} to='/'>
      <ListItemIcon>
      <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to='/predictive-analyst'>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <ListItemText  primary="Predictive Analyst" />
    </ListItem>
    <ListItem button component={Link} to='/marketing-analyst'>
      <ListItemIcon>
      <CardTravel />
      </ListItemIcon>
      <ListItemText primary="Marketing Analyst" />
    </ListItem>
    <ListItem button component={Link} to='/supply-chain'>
      <ListItemIcon>
      <LocalShipping />
      </ListItemIcon>
      <ListItemText primary="Supply Chain" />
    </ListItem>
    <ListItem button component={Link} to='/data-engineer'>
    <ListItemIcon>
    <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Data Engineer" />
  </ListItem>
  </div>
);

