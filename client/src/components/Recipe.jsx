import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Recipe extends Component {
    state = {
        recipe: {
            ingredients: []
        },
        error: ''
    }

    componentDidMount() {
        const recipeId = this.props.match.params.id
        this.fetchRecipe(recipeId)
    }

    fetchRecipe = async (recipeId) => {
        try {
            const recipeRes = await axios.get(`/api/v1/recipes/${recipeId}/`)
            this.setState({
                recipe: recipeRes.data,
            })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.recipe.name}</h1>
                <img src={this.state.recipe.img_url} alt="" />
                <h2>Ingredients:</h2>
                {this.state.recipe.ingredients.map(ingredient => (
                    <div key={ingredient.id}>
                        <Link className="dumb" to={`/ingredient/${ingredient.id}`}>
                            <h4>{ingredient.name}</h4>
                        </Link>
                    </div>
                ))}
                <h2>Directions:</h2>
                <p className='card'>{this.state.recipe.directions}</p>
            </div>
        )
    }
}
