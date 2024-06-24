# State Management in React

## The Problem with Direct Variables

In React, simply declaring and changing a variable doesn't cause the user interface (UI) to update. Even if you modify a variable's value, the change won't be reflected in what you see on the screen. This is because React doesn't automatically "react" to changes in regular variables.

## React's Core Principle: Reacting to Changes

React's name comes from its core principle: it reacts to changes in data. However, it needs to know when these changes occur to update the UI accordingly. This is where the concept of state comes in.

## Introducing useState

The `useState` hook is React's solution for managing state in functional components. It's a function that returns an array with two elements:

1. The current state value
2. A function to update that state

## How useState Works

When you use `useState`, you're essentially telling React to keep track of a piece of data for you. The hook returns two things:

1. A variable that holds the current state
2. A function to update that state

Whenever you call the update function, React knows that the state has changed. This triggers a re-render of your component, ensuring that the UI reflects the most current state.

## Key Points About useState

- The first element returned is the current state value.
- The second element is a function to update the state.
- When you call the update function, React re-renders the component with the new state value.
- You can set an initial state value when you first call `useState`.

By using `useState`, we ensure that React is aware of state changes and can update the UI accordingly. This allows React to live up to its name by truly reacting to changes in our application's data.