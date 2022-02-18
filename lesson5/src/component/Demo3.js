import React from 'react';

class Demo3 extends React.Component {
    constructor(props) {
        super(props)

        this.getAPIData = this.getAPIData.bind(this);
        this.state = {pokemon: []};
    }

    // Use async so your page can continue loading
    async getAPIData() {
        // This code is provided, it can be complicated
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"; // URL of the API
        const response = await fetch(url); // Get the data from the PokeAPI
        const responseJSON = await response.json(); // Turn the data into a JSON object that we can use

        // This should seem familiar
        const responsePokemon = responseJSON.results.map((item) => <li>{item.name}: Find more at {item.url}</li>);

        // This should also seem familiar
        this.setState(
            {
                pokemon: responsePokemon // Add the pokemon we got from the API to the pokemon state
            }
        );
    }

    // Only use an API once after the page loads
    componentDidMount() {
        // Start getting the API data from PokeAPI
        this.getAPIData();
    }

    render () {
        // Type your code here...

        const someJSX = <ul>{this.state.pokemon}</ul>;

        // Return some JSX here...
        return someJSX;
    }
}

export default Demo3;