import React from 'react';

class Demo4 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {pokemon:[]};
        this.handleError = this.handleError.bind(this);
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
        .then(function(response) {
            console.log(response.status);
            return response.json();
        })
        .then((response) => {
            const respPoke = response.results.map((item) => <li key={item.name}>{item.name}</li>);
            this.setState(
                {
                    pokemon: respPoke,
                }
            );
        })
        .catch(this.handleError)
    }

    render() {
        const someJSX = <ul>{this.state.pokemon}</ul>
        return someJSX;
    }
}

export default Demo4;
