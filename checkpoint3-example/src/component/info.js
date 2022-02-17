import React from 'react';
import '../style/info.css';

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {timestamp: props.timestamp};

        // Callback binder:
        this.updateTimestamp = this.updateTimestamp.bind(this);
    }

    updateTimestamp() {
      this.setState({timestamp: (new Date()).toISOString()});
    }

    render () {
        // Type your code here...
        let move = "Quick Attack"
        let description = "Flip a coin. If heads, this attack does 10 more damage."
        let damage = "10+"


        // Return some JSX here...
        return (
          <div id="info">
            <div id="move-header">
              <div id="move">
                <h3>{move}</h3>
              </div>
              <div id="damage">
                <h3>{damage}</h3>
              </div>
            </div>
            <div id="description">
              <p>{description}</p>
            </div>
            <div id="timestamp">
              Loaded at {this.state.timestamp}
            </div>

            <div id="button-container">
              <button onClick={this.updateTimestamp}>Refresh</button>
            </div>
          </div>
        );
    }
}

export default Info;