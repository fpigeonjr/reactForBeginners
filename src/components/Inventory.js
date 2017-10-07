import React from "react";
import AddFishForm from "./addFishForm";
import base from "../base";

class Inventory extends React.Component {
  constructor() {
    super();
    // add methods
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);

    this.state = {
      uid: null,
      storeOwner: null
    };
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    // take copy of the fish and add new data
    const updatedFish = {
      ...fish,
      [e.target.name]: e.target.value
    };
    this.props.updateFish(key, updatedFish);
  }

  authenticate(provider) {
    console.log(`trying to login with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData) {
    console.log(authData);
    if (err) {
      console.error(err);
    }
    // grab store info
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Please login using on of the following</p>
        <button className="github" onClick={() => this.authenticate("github")}>
          Login With Github
        </button>
        <button
          className="facebook"
          onClick={() => this.authenticate("facebook")}
        >
          Login With Github
        </button>
        <button
          className="twitter"
          onClick={() => this.authenticate("twitter")}
        >
          Login With Github
        </button>
      </nav>
    );
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input
          type="text"
          value={fish.name}
          name="name"
          placeholder="Fish Name"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          value={fish.price}
          name="price"
          placeholder="Fish Price"
          onChange={e => this.handleChange(e, key)}
        />
        <select
          type="text"
          value={fish.status}
          name="status"
          placeholder="Fish Status"
          onChange={e => this.handleChange(e, key)}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          type="text"
          value={fish.desc}
          name="desc"
          placeholder="Fish Desc"
          onChange={e => this.handleChange(e, key)}
        />
        <input
          type="text"
          value={fish.image}
          name="image"
          placeholder="Fish Image"
          onChange={e => this.handleChange(e, key)}
        />
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    );
  }

  render() {
    // logout
    const logout = <button>Logout</button>;

    // check if they are not logged in at all
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>;
    }

    // check if they are the owner of the current store
    if (this.state.uid !== this.state.storeOwner) {
      return (
        <div>
          <p>Sorry you aren't the owner of the store.</p>
          {logout}
        </div>
      );
    }
    return (
      <div>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  updateFish: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
};

export default Inventory;
