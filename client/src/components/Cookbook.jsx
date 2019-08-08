import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Cookbook extends Component {
    state = {
        cookbook: {
            recipes: []
        }
    }
    componentDidMount() {
        const cookbookId = this.props.match.params.id
        this.fetchCookbook(cookbookId)
    }

    fetchCookbook = async (cookbookId) => {
        try {
            const cookbookRes = await axios.get(`/api/v1/cookbooks/${cookbookId}/`)
            this.setState({
                cookbook: cookbookRes.data,
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
                <img src={this.state.cookbook.img_url} alt="" />
                <h1>{this.state.cookbook.title}</h1>
                <h3>Editor: {this.state.cookbook.editor} - Published:  {this.state.cookbook.year_published}</h3>
                <h3>Recipes: </h3>
                {this.state.cookbook.recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <h4>{recipe.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}
