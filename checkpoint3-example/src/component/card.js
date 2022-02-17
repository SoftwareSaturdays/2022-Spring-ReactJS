import React from 'react';
import Header from './header';
import Info from './info';
import '../style/card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...


        // Return some JSX here...
        return (
          <div id="card">
            <Header name={this.props.name} hp={this.props.hp}/>
            <Info timestamp={(new Date()).toISOString()}/>
          </div>
        );
    }
}


export default Card;