import React from 'react';
import axios from 'axios';

export class NewListing extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Reviewer: '',
            Cover: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e) {
        this.setState({
            Reviewer: e.target.value
        });
    }

    onChangePoster(e) {
        this.setState({
            Cover: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Book Title: " + this.state.Title + "\nReviewer: " + this.state.Reviewer + "\nImage: " + this.state.Cover);

        const newBook = {
            title: this.state.Title,
            reviewer: this.state.Reviewer,
            cover: this.state.Cover
        }

        axios.post('http://localhost:4000/api/books', newBook)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <h1>New Book Worming</h1><br />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter New Book Title</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Book Wormer's Name</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Reviewer}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Enter Book Cover Image</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangePoster}></input>
                    </div>
                    <div className='form-group'>
                        <input type='submit'
                            value='Publish Book'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}