import React from 'react';
import contact from'../images/sunset.jpg';


//Contact Page with image and contact details
export class Contact extends React.Component{

    render(){
        return(
            <div>
                 <h2>Email: beckybloom@gmail.com</h2>
                <img src={contact} width="1600" height="800" alt="Mountains"></img>
               
            </div>
            
        );
    }

}