import React from 'react';

class Software extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...

        // Showing the use of props through local variables
        let dayOfWeek = this.props.day;
        let date = this.props.date;

        const someJSX = (
            <div id="software">
                <p>Today is {dayOfWeek}, {date}.</p>
            </div>
        );

        // Return some JSX here...
        return someJSX;
    }
}


export default Software;