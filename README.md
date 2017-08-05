![](http://wes.io/dgAQ/content)

# React For Beginners — [ReactForBeginners.com][ReactForBeginners.com]

Starter files for the React For Beginners course. Come [Learn React][ReactForBeginners.com] with me!

The code in this repo meant to be a reference point for anyone following along with the video course.

## To Start

1. cd into `catch-of-the-day` and follow along with the videos
1. launch server by running `yarn install`

## Lesson 2

Component is a reusable piece of your website. React dev tools can show you the custom components of a React site. Designers can work on seperate components. Components can have data and event listeners.

App component is the parent component. It contains all the fish in the state. Changes in state are reflected across the entire app.

## Lesson 3

Build our first component `StorePicker`. Our mount point is the `div#main`. We use the `render` method to tell React where to send the component.

`render(<StorePicker/>, document.querySelector('#main') )`

> StorePicker component

```javascript

import React from 'react'

class StorePicker extends React.Component {
  render() {
    return <p>Hello</p>
  }
}

export default StorePicker

```

Recommend to store components seperately in the `src/components/StorePicker.js`

Then we import it to our index.js like this:

`import StorePicker from './components/StorePicker'`

## Lesson 4

We work more on our StorePicker component using JSX. In the `render` method, we can only have one parent element and the entire block must be wrapped in `()`.

Classes are added by using the `<form className="store-selector">` since `class` is reserved by javascript.

Comments are made by `{/* JSX COMMENT */}`

## Lesson 5

Add styles

## Lesson 6

Adds `Header`, `Order`, and `Inventory` components to our main `App` component.

## Lesson 7

We pass data to our components via `props`.

```javascript

// in our App component we pass props
<Header tagline="Fresh Seafood Market"/>

// in our Header component we access props
<h3 className="tagline">{this.props.tagline}</h3>

```

## Lesson 8

Stateless functional components can be used for simple rendering html to the DOM.

We can refactor our Header component to a stateless component by:

* by removing the `class` and `rendor` method
* Add a const named Header and arrow function
* pass in `props` in the parameters

```javascript

const Header = (props) => {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    )
}

```

## Lesson 9

React Router is used to show and hide components anywhere in your application depending on the url. Everything in React is a component even React Router.

```javascript

import { BrowserRouter, Match, Miss } from 'react-router'
<BrowserRouter>
  <div>
    <Match exactly pattern="/" component={StorePicker} />
    <Match pattern="/store/:storeId" component={App} />
    <Miss component={NotFound}/>
  </div>
</BrowserRouter>

```

## Lesson 10

[Facebook Events Docs][fb-events]

Events are attached inline using **onClick** or **onSubmit** evcent handler.

Get access to form data using a **ref**.

Ok so to reference this in your custom methods you would setup a contructor to bind to this.

```javascript

class StorePicker extends React.Component {
  constructor() {
    super()
    this.goToStore =this.goToStore.bind(this)
  }
  goToStore( event ) {
    event.preventDefault()
    // grab text from the box
    console.log(this.storeInput)
  }
  //Form input
  <input type="text" required placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => {this.storeInput = input} } />
}

```

Or you can bind this directly on the form submit and remove the **constructor**.

 ```javascript

<form className="store-selector" onSubmit={ this.goToStore.bind(this) } >

```

## Lesson 11

In order to route our form to new url we bring in the router.
React Router could use Redirect component or you can use an imperative api.

You can gain access to the router in your component

```javascript

StorePicker.contextTypes = {
  router:React.PropTypes.object
}

```
then in our goToStore method we use the router to the store

```javascript

//transition from / to /store/:storeId
this.context.router.transitionTo(`store/${storeId}`)

```

React uses html push state so the page doesn't reload itself

## Lesson 13: State

This will be a video you watch over and over 🐠🐠🐠

State is a representation of your data in the app. Each component can have its own state. Think of it as one object that holds all of the data.

We need to share State with other components so a good place to do that is your Master component and for us that is the **App Component**.

GetInitialState is a way to let React know of the different states for the app. We add it to the App class via a **constructor**.

Pass things down to child components via **props**.

## Lesson 14: Load in sample fishes

## Lesson 15: Display Fish

If you want to loop over something, you need an array `Object.keys` and loop via `.map`. This method takes in a key and outputs Fish components. React will yell at you if the component are not unique so we do that by adding the `key={keys}`. We pass the state of the fish via `details`.

```javascript

<ul className="list-of-fishes">
  {
    Object
    .keys(this.state.fishes)
    .map(key => <Fish key={key} details={this.state.fishes[key]} />)
  }
</ul>

```

## Lesson 16: Order Button

Update our **Fish** component to dynamically set **Add to Order** functionality based on the fish's availablity.

We build an `addtoOrder` method in the App.js file. It adds one pound of the selected fish and adds it to the order state.

To invoke the `addToOrder` method we can't use `key` from the props we send to the component. Instead we have to create our own and in this case we make one up called `index={key}`.

## Lesson 17: Display our Order



[ReactForBeginners.com]: https://ReactForBeginners.com/
[fb-events]: https://facebook.github.io/react/docs/events.html