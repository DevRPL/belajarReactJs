import React, { Component, Fragment } from 'react';
import './Product.css';
import CardComponent from './CardComponent';

class ProductComponent extends Component {

    state = {
        order:0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <div className="p-3">
                <CardComponent onCounterChange={(value) => this.handleCounterChange(value)}>
                    <span className="badge-primary">{this.state.order}</span>
                </CardComponent>
            </div>
        )
    }
}

export default ProductComponent;