import React, { Component } from 'react';
import axios from 'axios'

export default class AddCookbookForm extends Component {
    state = {
        newCookbook: {
            title: '',
            editor: '',
            img_url: '',
            year_published: ''
        }
    }
    handleChange = (evt) => {
        const copyNewCookbook = { ...this.state.newCookbook }
        copyNewCookbook[evt.target.name] = evt.target.value
        this.setState({ newCookbook: copyNewCookbook })
    }

    createCookbook = async (evt) => {
        evt.preventDefault()
        try {
            await axios.post('/api/v1/cookbooks/', {
                title: this.state.newCookbook.title,
                editor: this.state.newCookbook.editor,
                img_url: this.state.newCookbook.img_url,
                year_published: this.state.newCookbook.year_published,
            });
            this.props.formtoggle()
            this.props.fetch()
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.createCookbook}>
                    <input type="text" name="title" id="" placeholder="title" onChange={this.handleChange} />
                    <input type="text" name="img_url" id="" placeholder="image url" onChange={this.handleChange} />
                    <input type="text" name="editor" id="" placeholder="edited by" onChange={this.handleChange} />
                    <input type="date" name="year_published" id="" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
