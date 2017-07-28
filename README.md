![](http://wes.io/dgAQ/content)

# React For Beginners — [ReactForBeginners.com](https://ReactForBeginners.com)

Starter files for the React For Beginners course. Come <a href="https://ReactForBeginners.com/">Learn React</a> with me!

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

