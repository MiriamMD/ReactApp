import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import SampleFishes from '../mocks/sampleFishes'
import base from '../base'

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);

    // Initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  componentWillMount() {
    // this runs before the <App> is rendered 
    console.log(this.props.match.params.storeId)
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);

    if (localStorageRef) {
      //update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef) 
      }); 
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.order));
  }

  loadSamples() {
    this.setState({
      fishes: SampleFishes
    });
  }

  addToOrder(key) {
    //take a copy of our state
    const order = {...this.state.order};
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //update our state
    this.setState({order});
  }

  removeFromOrder(key) {
    const order = {...this.state.order};
    delete order[key];
    this.setState({ order });
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes};
    // add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({fishes});
  }

  updateFish(key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({fishes});
  }

  removeFish(key) {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({fishes});
  }

  render() {
    return (
      <div className="catch-of-the-day"> 
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
                addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}/>
        <Inventory
          addFish={this.addFish} 
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}/>
      </div>
    )
  }
}

export default App;