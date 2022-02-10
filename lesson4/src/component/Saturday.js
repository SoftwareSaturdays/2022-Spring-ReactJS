import React from 'react';

class Saturday extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render () {
        // Type your code here...
        let lesson = this.props.lessonNumber;
        let learning = this.props.software;

        const someJSX = 
        <div id="saturday">
            <p>It is week {lesson} of the unit.</p>
            <p>We are learning about {learning}.</p>
        </div>
        

        // Return some JSX here...
        return someJSX;
    }
}


export default Saturday;