import React from 'react';
import { Books } from './books';
import axios from 'axios';

export class BookShelf extends React.Component{

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    // state object - stores JSON object of JSON collection of movie information
    state = {
        movies: [ ]
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/books')
        .then((response) => {
            this.setState({ movies: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    ReloadData(){
        // make axios call to go and get data from this url, return promise and set it equal to our state
        axios.get('http://localhost:4000/api/books') 
        .then(response => { // fulfilled state
            this.setState({ movies:response.data });
        })
        .catch((error)=>{ // rejected state
            console.log(error)
        });        
    }

    render(){
        return(
            <div>
                <h1>Wormies BookShelf Listing</h1><br />
                <Books movies={this.state.movies} ReloadData={this.ReloadData}></Books>
            </div>
        )

    }
}