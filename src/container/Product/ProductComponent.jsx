import React, { Component } from 'react';
import './Product.css';
import CardComponent from './CardComponent';
import { GlobalConsumer } from '../../Context/Context';

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
        console.log(this)
        return (
            <div className="p-3">
                {/* <CardComponent onCounterChange={(value) => this.handleCounterChange(value)}> */}
                <CardComponent>
                    <span className="badge-primary">{this.props.state.total}</span>
                </CardComponent>
            </div>
        )
    }
}

export default GlobalConsumer(ProductComponent);