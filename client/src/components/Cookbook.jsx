import React, { Component } from 'react'
import axios from 'axios';

export default class Cookbook extends Component {
    state = {
        cookbook: {}
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
                <h1>{this.state.cookbook.title}</h1>
            </div>
        )
    }
}
