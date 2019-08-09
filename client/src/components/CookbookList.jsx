import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCookbookForm from './AddCookbookForm'



export default class CookbookList extends Component {
    state = {
        cookbooks: [],
        error: '',
        isAddFormDisp: false,
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

    toggleAddForm = () => {
        this.setState((state) => {
            return ({ isAddFormDisp: !state.isAddFormDisp })
        })
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
                        <Link className="dumb" to={`/cookbook/${cookbook.id}`}><h2>{cookbook.title}</h2></Link>
                    </div>
                ))}
                {this.state.isAddFormDisp ? 
                <AddCookbookForm fetch={this.fetchCookboooks} formtoggle={this.toggleAddForm} /> : <button className="btn btn-primary" onClick={this.toggleAddForm}>Add Cookbook</button>
                }
            </div>
        );
    }
}
