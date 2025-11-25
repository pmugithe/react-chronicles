#Hooks

1. Class Component vs Functional Component
2. Normal Functions vs arrow Functions
3. useState() vs this.state

Class Component vs Functional Component
---------------------------------------

So when we create a Class Component, it has to extends from React.Component, which contains 3200+ lines of code and contains a lot of information on props, states,features and so on ....

For Example:
============

class Car extends React.Component {
    constructor() {
            super();
            this.state = {color: "red"}; // used to maintain state
    }
    render() { // simple method
        return <h2>I am a Car!</h2>;
    }
}

Earlier, we used to have componentDidMount, componentDidUpdate, and componentWillUnmount to complete one task, but now, we can use useEffect
useEffect replaces all three class component lifecycle methods with a single hook.


Normal Functions vs Arrow Functions

Normal function:
function timer(){
    return time.Now();
}

Arrow function: 
const timer= () => time.Now();

## Hooks 
