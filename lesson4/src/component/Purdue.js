import React from 'react';

class Purdue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {semester: "Fall", year: props.year, timeStamp: (new Date()).toISOString()};
    }

    render () {
        // Type your code here...

        let someJSX = (
            <div>
                <p>It is the {this.state.semester} of {this.state.year}.</p>
                <p>Timestamp: {this.state.timeStamp}</p>
            </div>
        );

        // Change the JSX after two seconds
        setTimeout(() => {
            //* Correct method
            this.setState({semester: "Spring", year: 2022});
            //! Don't modify state directly. For example, here's what NOT to do:
            // this.state = {semester: "test", year: 1}; // React won't see these changes
        }, 2000);

        //* NOTE:
        // If you want to use previous state or prop values to update state,
        // the updates may be asynchronous!

        // ! Do not do it this way
        // this.setState({year: this.state.year + this.props.someValue});

        //* Do it this way
        // this.setState((state, props) => ({
        //     year: state.year + props.someValue
        // }));

        // For more information: https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

        // Return some JSX here...
        return someJSX;
    }
}


export default Purdue;