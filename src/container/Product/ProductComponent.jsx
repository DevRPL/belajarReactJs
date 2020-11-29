import React, { Component } from 'react';
import './Product.css';
import CardComponent from './CardComponent';

class ProductComponent extends Component {

    /*state = {
        order:0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    } */
    
    render() {
        return (
            <div className="p-3">
                {/* <CardComponent onCounterChange={(value) => this.handleCounterChange(value)}> */}
                <CardComponent>
                    <span className="badge-primary">{0}</span>
                </CardComponent>
            </div>
        )
    }
}

export default ProductComponent;