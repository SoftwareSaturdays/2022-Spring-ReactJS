import React from 'react';

class Demo2 extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...
        const listOfNums = this.props.numbers.map((number) => <li>{number}</li>);

        const someJSX = <ul>{listOfNums}</ul>;

        // Return some JSX here...
        return someJSX;
    }
}

export default Demo2;