import React from 'react';
import '../style/Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        return (
          <div class="card">
            {/* For checkpoint 1: You need link this prop to some data in App.js */}
            {this.props.name}
          </div>
        );
    }
}

export default Card;