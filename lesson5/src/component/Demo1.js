import React from 'react';

class Demo1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {step: 1};
    }

    componentDidMount() {
        console.log("The component has mounted. This is step " + this.state.step);
        this.setState({step: this.state.step+1});
    }

    componentDidUpdate() {
        console.log("The component has updated. This is step " + this.state.step);

        // NEVER DO THIS - REACT WILL BREAK
        //this.setState({step: this.state.step+1});
    }

    componentWillUnmount() {
        console.log("The component will unmount. This is step " + this.state.step);
        this.setState({step: this.state.step+1});
    }

    render () {
        // Type your code here...
        const someJSX = <p>I am some JSX. This is step {this.state.step + 1}. </p>
        

        // Return some JSX here...
        return someJSX;
    }
}

export default Demo1;