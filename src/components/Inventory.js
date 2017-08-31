import React from 'react'
import AddFishForm from './addFishForm'

class Inventory extends React.Component {

  constructor()
  {
    super()
    // add methods
    this.renderInventory = this.renderInventory.bind(this)
  }

  renderInventory(key)
  {
    const fish = this.props.fishes[key]
    return (
      <div className="fish-edit" key={key}>
        <input type="text" value={fish.name} name="name" placeholder="Fish Name"/>
        <input type="text" value={fish.price} name="price" placeholder="Fish Price"/>
        <select type="text" value={fish.status} name="status" placeholder="Fish Status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" value={fish.descr} name="descr" placeholder="Fish Descr"></textarea>
        <input type="text" value={fish.image} name="image" placeholder="Fish Image"/>
      </div>
    )
  }

  render()
  {
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }

}

export default Inventory