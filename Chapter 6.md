# React Rendering and Virtual DOM

## Key Concepts in React's Rendering Process

1. **CreateRoot and DOM Comparison**
   - `createRoot` (React 18+) or `render` (earlier versions) generates React's own representation of the DOM
   - This is compared with the web browser's actual DOM
   - Only components with changes are updated

2. **Browser Updates vs React's Approach**
   - While browsers have optimized update processes, they still make more extensive changes than necessary for small updates
   - React's approach is more targeted and efficient

3. **Virtual DOM**
   - Maintains a lightweight copy of the actual DOM
   - Allows React to compute differences and update only what's necessary

4. **Handling Network-Dependent Values**
   - Values depending on network calls may update asynchronously
   - Subsequent network responses might overwrite immediate updates

5. **Optimizing Update Calls**
   - React can batch and prioritize updates to reduce overhead

6. **React Fiber**
   - A complete reimplementation of React's core algorithm introduced in React 16
   - Enables incremental rendering and better update prioritization

7. **Reconciliation**
   - The process React uses to determine what has changed in its virtual representation compared to the actual DOM

8. **Virtual DOM and Reconciliation**
   - The Virtual DOM is the concept, reconciliation is the algorithm behind it

9. **Concurrent Rendering (React 18+)**
   - Allows React to interrupt, pause, resume, or abandon a render
   - Provides more nuanced control over how updates are prioritized and applied

