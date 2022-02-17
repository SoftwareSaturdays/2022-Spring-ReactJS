import React from 'react';
import '../style/header.css';
import ImagePath from '../img/pikachu-field.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props)

    }

    render () {
        // Type your code here...



        // Return some JSX here...
        return (
          <div id="header">
            <div id="container">
              <div id="name">
                <h1>
                  {this.props.name}
                </h1>
              </div>
              <div id="hp">
                <h1>
                  {this.props.hp}
                </h1>
              </div>
            </div>
            <img src={ImagePath} alt="Pikachu in a field"></img>
          </div>
        );
    }
}


export default Header;