import React, {Component} from 'react';
import {Bar, Pie, Line} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class SupplyChain extends Component {
    state = {
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40
                    ]
                }
            ]
        },
        pie: {
            labels: [
                'Red', 'Green', 'Yellow'
            ],
            datasets: [
                {
                    data: [
                        300, 50, 100
                    ],
                    backgroundColor: [
                        '#FF6384', '#36A2EB', '#FFCE56'
                    ],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                }
            ]
        },
        line: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [
                        65,
                        59,
                        80,
                        81,
                        56,
                        55,
                        40
                    ]
                }
            ]
        }
    }
    render() {

        return (
            <React.Fragment>
                <h1 className="page-header">
                    Supply Chain {" "}<i className="fa fa-angle-right"></i>{" "}
                    Dashboard
                </h1>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <Paper>
                                <div className="card" style={{width: '100%'}}>
                                    <Line data={this.state.line} height={'70%'}/>
                                </div>                        
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper align="center">
                                <div className="card" style={{width: '300px'}}>
                                    <Pie data={this.state.pie} width={100} height={140}/>
                                </div>                            
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper>
                                <div className="card" style={{width: '100%', height:'420px'}}>
                                    <Bar
                                        data={this.state.data}
                                        width={100}
                                        height={'70%'}
                                        options={{
                                        maintainAspectRatio: true
                                    }}/>
                                </div>                            
                            </Paper>
                        </Grid>
                    </Grid>
                </div>                
            </React.Fragment>
        );
    }
}

export default SupplyChain;