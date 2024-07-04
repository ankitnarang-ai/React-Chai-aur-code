# React Router

## Link and Why Not to Use `<a>` Tag

### Link
- The `Link` component in React Router is used for creating navigational links within your application.
- It changes the URL in the browser without reloading the page, utilizing the history API for navigation.

### Why Not to Use `<a>` Tag
- Using the `<a>` tag in a React application causes the browser to reload the entire page.
- This breaks the single-page application (SPA) behavior of React, leading to a less smooth user experience.

---

## NavLink

- `NavLink` is a variation of `Link` that allows for additional styling and functionality.
- It can apply active styles to the link when the current URL matches the `to` prop, making it useful for indicating the active route.

---

## Two Different Ways to Learn React Router

### Documentation
- The React Router documentation (https://reactrouter.com/) provides comprehensive guides and examples.
- It covers basic usage, advanced features, and best practices for implementing routing in React applications.

---

## Loader: Fetching Data Before `useEffect`

- A loader in React is used to fetch data before the `useEffect` hook triggers.
- This ensures that the component has necessary data available immediately upon rendering.
- To implement a loader, you typically use a custom hook like `useLoader`.
