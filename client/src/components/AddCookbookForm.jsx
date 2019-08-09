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
                    <div className="form-group">
                        <input className="form-control form-control-lg" type="text" name="title" id="" placeholder="title" onChange={this.handleChange} />
                        <input className="form-control form-control-lg"  type="text" name="img_url" id="" placeholder="image url" onChange={this.handleChange} />
                        <input className="form-control form-control-lg"  type="text" name="editor" id="" placeholder="edited by" onChange={this.handleChange} />
                        <input className="form-control form-control-lg"  type="date" name="year_published" id="" onChange={this.handleChange} />
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
