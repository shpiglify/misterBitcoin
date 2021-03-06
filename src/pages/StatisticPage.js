import React, { Component } from 'react';

import Chart from '../cmps/Chart'
import BitcoinService from '../services/BitcoinService';

export default class StatisticPage extends Component {
    state = {
        chart1: null,
        chart2: null
    }
    async componentDidMount() {
        const marketPromise = BitcoinService.getMarketPrice();
        const transactionsPromise = BitcoinService.getConfirmedTransactions();
        
        const marketChart = await marketPromise;
        const transactionsChart = await transactionsPromise;

        this.setState({
            chart1: {
                data: marketChart.values.map(val => val.y),
                title: marketChart.name,
                description: marketChart.description,
                color: '#feb236'
            }
        })
        this.setState({
            chart2: {
                data: transactionsChart.values.map(val => val.y),
                title: transactionsChart.name,
                description: transactionsChart.description,
                color: '#6b5b95'
            }
        })
    }
    render() {
        return (
            <section className="statistic-page">
                
                {this.state.chart1 && <Chart chart={this.state.chart1} />}
                {this.state.chart2 && <Chart chart={this.state.chart2} />}
            </section>
        )
    }
}
