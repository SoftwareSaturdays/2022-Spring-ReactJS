import React from 'react';

class Demo3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {pokemon:[]};
        this.handleResponse = this.handleResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleFetch(response) {
        console.log(response.status);
        return response.json();
    }

    handleResponse(response) {
        const respPoke = response.results.map((item) => <li key={item.name}>{item.name}</li>);
        this.setState(
            {
                pokemon: respPoke,
            }
        );
    }

    handleError(error) {
        console.log(error);
        this.setState(
            {
                pokemon:<li>Network Error!</li>
            }
        );
    }

    componentDidMount() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
        fetch(url)
        .then(this.handleFetch)
        .then(this.handleResponse)
        .catch(this.handleError)
    }

    render() {
        const someJSX = <ul>{this.state.pokemon}</ul>
        return someJSX;
    }
}

export default Demo3;
