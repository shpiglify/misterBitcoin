import React, { Component } from 'react';
import { Sparklines, SparklinesLine  } from 'react-sparklines';
import PropTypes from 'prop-types';

export default class Chart extends Component {
    render() {
        console.log(this.props.chart)
        return (
            <section>
                <div>{this.props.chart.title}</div>
                <Sparklines data={this.props.chart.data}>
                    <SparklinesLine color={this.props.chart.color} />
                </Sparklines>
            </section>
        )
    }
}

Chart.propTypes = {
    chart: PropTypes.object
}