# Hooks in React

1. Class Component vs Functional Component
2. Normal Functions vs arrow Functions
3. useState() vs this.state

## Class Component vs Functional Component

So when we create a Class Component, it has to extends from React.Component, which contains 3200+ lines of code and contains a lot of information on props, states,features and so on ....

### For Example:
```
class Car extends React.Component {
    constructor() {
            super();
            this.state = {color: "red"}; // used to maintain state
    }
    render() { // simple method
        return <h2>I am a Car!</h2>;
    }
}
```

Earlier, we used to have componentDidMount, componentDidUpdate, and componentWillUnmount to complete one task, but now, we can use useEffect
useEffect replaces all three class component lifecycle methods with a single hook.


## Normal Functions vs Arrow Functions

Normal function:
```
function timer(){
    return time.Now();
}
```
Arrow function: 

```
const timer= () => time.Now();
```

## 1. useState()

The **useState()** Hook provides main two things:

1. A **state variable** to retain the data between renders.
2. A **state setter function** to update the variable and trigger **React** to render the component again.

- useSate() hook is method that let's you track the state (refers to data or properties in FC) in functional component. 
- component-specific memory is called state.

```
const [state, setState] = useState(initialState) // initialState: The value you want the state to be initially. It can be a value of any type.
```
useState returns an array with exactly two values:

1. The current state. During the first render, it will match the initialState you have passed.
2. The set function that lets you update the state to a different value and trigger a re-render.

## 2. useEffect()

Componnents needs to pass or sync data with external systems and for you to do it, you'd need some hook that lets you sync it for you, that is **useEffect()**.

- Some components need to synchronize with external systems. 
- For example, you might want to control a non-React component based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. 
- **Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.**

