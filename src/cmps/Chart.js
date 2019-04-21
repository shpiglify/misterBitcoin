import React, { Component } from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';
import PropTypes from 'prop-types';

export default class Chart extends Component {
    render() {
        return (
            <section>
                <div>{this.props.chart.title}</div>
                <Sparklines data={this.props.chart.data}>
                    <SparklinesBars color={this.props.chart.color} />
                </Sparklines>
            </section>
        )
    }
}

Chart.propTypes = {
    chart: PropTypes.object
}