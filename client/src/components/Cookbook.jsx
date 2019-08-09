import React, { Component } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

export default class Cookbook extends Component {
    state = {
        cookbook: {
            recipes: []
        },
        reDir: false
    }
    componentDidMount() {
        const cookbookId = this.props.match.params.id
        this.fetchCookbook(cookbookId)
    }

    handleDelete = async () => {
        try {
            await axios.delete(`/api/v1/cookbooks/${this.props.match.params.id}/`)
            this.setState({
                reDir: true
            })
        }
        catch (err) {
            console.log(err)
        }
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
        if (this.state.reDir === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <img src={this.state.cookbook.img_url} alt="" />
                <h2>{this.state.cookbook.title}</h2>
                <h3>Editor: {this.state.cookbook.editor}  Published:  {this.state.cookbook.year_published}</h3>
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                <h2>Recipes: </h2>
                {this.state.cookbook.recipes.map(recipe => (
                    <div key={recipe.id}>
                        <Link className="dumb" to={`/recipe/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}
