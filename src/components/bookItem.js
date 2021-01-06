import React from 'react';

// import bootstrap card for display purposes
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItem extends React.Component {

    constructor(){
        super();

        this.DeleteBook = this.DeleteBook.bind(this);
    }

    DeleteBook(e){
        e.preventDefault();
        console.log("Delte book" + this.props.movie._id);

        axios.delete('http://localhost:4000/api/books/' + this.props.movie._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.cover} width="200" height="300"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.reviewer}
                            </footer>
                        </blockquote>
                        <Button variant="danger" onClick={this.DeleteBook}>Delete Book</Button>
                        <Link to={"/update/" + this.props.movie._id} className="btn btn-primary">Edit Book</Link>
                    </Card.Body>                    
                </Card>
            </div>
        )

    }
}