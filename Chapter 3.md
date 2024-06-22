# Understanding the Difference Between Create React App and Vite

## Create React App (CRA)
- `App.js` returns the HTML which is rendered in `main.js`. All changes are visible in `index.html`.
- Inner scripts in Create React App add scripts to `index.html`, which can be seen in the browser.
- Function names must start with an uppercase letter.
- File names should start with an uppercase letter (Best Practice).
- In Create React App, file names can be `.js` or `.jsx`:
  - `.js` - When it returns JavaScript.
  - `.jsx` - When it returns HTML.
- **Best Practices**

## Vite
- Scripts are directly added in `index.js`.
- Function names must start with an uppercase letter.
- File names should start with an uppercase letter (Best Practice).
- Components only have a `.jsx` format; `.js` is not supported.

## Additional Notes
- Since in the main file it renders only one element at a time, for multiple elements we use `<div>`. However, using `<div>` repeatedly can be problematic, so fragments are introduced.
- React Fragment can be represented using `<>` and `</>`:
  ```jsx
  <>
    <ChildComponent />
    <AnotherChildComponent />
  </>
```