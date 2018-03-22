import React from 'react';
import { disconnect } from 'cluster';


class Product extends React.Component{
    componentDidMount(){
        this.props.getProduct();
    }
    render(){
        return(
            <div></div>
        )
    }
}