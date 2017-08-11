import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'
import base from '../base'

class App extends React.Component {

  constructor()
  {
    super()
    // add methods
    this.addFish =this.addFish.bind(this)
    this.loadSamples =this.loadSamples.bind(this)
    this.addToOrder =this.addToOrder.bind(this)

    // getInitialState
    this.state =  {
      fishes: {},
      order: {}
    }
  }

  componentWillMount()
  {
    // runs before the <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
    {
      context: this,
      state: 'fishes'
    })

    // check if there is any order data in local Storage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`)
    if (localStorageRef) {
      // update our order components order state
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
  }

  componentWillUnmount()
  {
    base.removeBinding(this.ref)
  }

  componentWillUpdate(nextProps, nextState)
  {
    // set our local Storage
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order))
  }

  loadSamples()
  {
    this.setState({
      fishes:sampleFishes
    })
  }

  addFish(fish)
  {
    // update our state
    // copy state
    const fishes = {...this.state.fishes}
    // add in our new fish
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    // set state
    this.setState({ fishes })
  }

  addToOrder(key)
  {
    // copy our state
    const order = {...this.state.order}
    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1
    // update our state
    this.setState({ order })
  }

  render()
  {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {
              Object
              .keys(this.state.fishes)
              .map(key =>
                <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
              )
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes}
          order={this.state.order}
          params={this.props.params}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }

}

export default App
