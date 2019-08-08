import React, { Component } from 'react'
import axios from 'axios';

export default class Ingredient extends Component {
    state = {
        ingredient: {},
        error: ''
    }

    componentDidMount() {
        const ingredientId = this.props.match.params.id
        this.fetchIngredient(ingredientId)       
    }

    fetchIngredient = async (ingredientId) => {
        try {
            const ingredientRes = await axios.get(`/api/v1/ingredients/${ingredientId}/`)
            this.setState({
                ingredient: ingredientRes.data
            })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }
    
    render() {
        const st = this.state.ingredient
        return (
            <div>
                <h2>{st.name}</h2>
                <img src={st.img_url} alt=""/>
                <h3>Get some from: {st.retailer}</h3>
            </div>
        )
    }
}
