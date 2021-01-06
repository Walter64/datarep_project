import React from 'react';
import { BookItem } from './bookItem';

export class Books extends React.Component{

    render(){
        return this.props.movies.map( (movie) => {
            return <BookItem movie={movie} ReloadData={this.props.ReloadData}></BookItem>
        })

    }
}