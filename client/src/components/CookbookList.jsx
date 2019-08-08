import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class CookbookList extends Component {
    state = {
        cookbooks: [],
        error: ''
    }

    componentDidMount() {
        this.fetchCookboooks()
    }

    fetchCookboooks = async () => {
        try {
            const res = await axios.get('/api/v1/cookbooks/')
            this.setState({ cookbooks: res.data })
        }
        catch (err) {
            console.log(err)
            this.setState({ error: err.message })
        }
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>All Cookbooks</h1>
                {this.state.cookbooks.map((cookbook) => (
                    <div key={cookbook.id}>
                        <Link to={`/cookbook/${cookbook.id}`}>{cookbook.title}</Link>
                    </div>
                ))}
            </div>
        );
    }
}
