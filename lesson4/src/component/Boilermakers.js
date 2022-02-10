import React from 'react';

class Boilermakers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {mascot:"Purdue Pete", sport:"Football", numberOfWins:0};

        this.winGame = this.winGame.bind(this);
    }

    winGame () {
        this.setState({numberOfWins: this.state.numberOfWins + 1});
    }

    render () {
        // Type your code here...
        const someJSX = 
        <div id="boilermaker">
            <p>Our mascot is {this.state.mascot} and we love to watch {this.state.sport}.</p>
            <h1>He has won {this.state.numberOfWins} games.</h1>
            <button onClick={this.winGame}>Win!</button>
        </div>;  

        // Return some JSX here...
        return someJSX;
    }
}


export default Boilermakers;