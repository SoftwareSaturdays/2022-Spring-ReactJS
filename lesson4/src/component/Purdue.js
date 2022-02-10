import React from 'react';

class Purdue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {semester: "Fall", year: props.year};
    }

    render () {
        // Type your code here...
        let someJSX = null;
        if(this.state.year === "2019") {
            someJSX = <div id="purdue"><p>Wait! Is it the past?</p><p>The year is {this.state.year}</p></div>;
        } else {
            someJSX = <div><p>It is the {this.state.semester} of {this.state.year}.</p></div>;
        }

        // Return some JSX here...
        return someJSX;
    }
}


export default Purdue;