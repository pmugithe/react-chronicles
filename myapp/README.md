# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Date: 11-24-2025 | Databinding and Virutal DOM.

# Data Binding:

- Data Binding, binds components from parent to child, React primarily uses one-way data binding, where data flows from parent to child components (component state to UI) via props. aka Properties
- Props in React are the objects used to pass data/information to a Component. It is short for Properties.
- This one-way data flow helps maintain a clear structure in the application. This ensures a predictable data flow and makes the application easier to debug and maintain. React also supports two-way data binding through controlled components.

Two Types of Binding:
1. One Way Binding - Let's you bind from Parent to child, Event Binding is one way Binding
2. Two Way Binding - In two-way data binding, data flows in both directions. This means that the changes in the UI (like user input) are reflected in the component’s *state*, and changes in the state are automatically reflected in the UI. Always state, or life cycle hooks. [GeekForGeeks-types-of-binding](https://www.geeksforgeeks.org/reactjs/reactjs-data-binding/#)

##### Virtual DOM:

- It is a Memory representation of you real DOM - Tree.
- Maintains 2 DOMs and based on the comparision, react will patches or updates the changes onto the real DOM and saves it.
- it is very lightweight that is because, it mains a lightweight copy or in-memory representation.
- By doing this so, patching or updating by comparing, React is very fast on changes and most efficient.

## React Hooks:

Hooks provide a way to manage state, perform side effects, and reuse stateful logic without the need for class components by using functional components and hooks should be called only at the top level of an FC (Functional Component) at the top.

