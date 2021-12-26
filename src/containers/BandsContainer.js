import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map((band) => <li>{band.name}</li>);
  };

  render() {
    return (
      <div>
        <BandInput addBand = {this.props.addBand}/>
        <h2>Current Bands</h2>
        <ul style={{ listStyle: "none" }}>{this.renderBands()}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({type: 'ADD_BAND', payload: name}),
    removeBand: () => dispatch({type: 'REMOVE_BAND'})
  }
}

export default connect((state) => state, mapDispatchToProps)(BandsContainer);
