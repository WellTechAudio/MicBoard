import React from 'react';
import ReactDOM from 'react-dom';

import { Chart } from './chart.jsx';

class Slot extends React.Component {
  render() {
    return (
      <div>
        <h1>THis is a slot</h1>
        <Chart data={this.props.data} />
        {/* <p>RF Level: { this.props.data.rf_level }</p>*/}
        <p>Batterys Level: { this.props.data.battery }</p>
        <p>runtime: { this.props.data.runtime }</p>
        <p>antenna: { this.props.data.antenna }</p>
        <p>frequency: { this.props.data.frequency}</p>
        <p>name: { this.props.data.name}</p>
        <p>status: { this.props.data.status}</p>
        <p>type: { this.props.data.type}</p>
        <p>offset: { this.props.data.tx_offset}</p>
        <p>quality: { this.props.data.quality }</p>
      </div>
    )
  }
}

export { Slot }
