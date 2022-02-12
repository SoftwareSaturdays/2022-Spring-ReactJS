import React from 'react';

class Saturday extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...

        // Showing the use of props directly in jsx
        const someJSX = (
            <div id="saturday">
                <p>It is lesson {this.props.lessonNumber} of the unit.</p>
                <p>We are learning about {this.props.software}.</p>
            </div>
        );


        // Return some JSX here...
        return someJSX;
    }
}


export default Saturday;