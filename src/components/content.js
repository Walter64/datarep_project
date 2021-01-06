import React from 'react';
import image from'../images/clubImage.jpg';

export class Content extends React.Component {

    render() {
        return (
            <div>
            <h1>Welcome to Trees and Bees Book Club</h1>
            <img src={image} width="1600" height="800" alt="Holiday on the Beach"></img>
        </div>
        )
    }
}

