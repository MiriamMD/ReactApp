import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h1>Inventory</h1>
        <AddFishForm addFish={this.props.addFish} loadSamples={this.props.loadSamples} />
        <button onClick={this.props.loadSamples}>Load Samples Fishes </button>
      </div>
    );
  }
}

export default Inventory;
