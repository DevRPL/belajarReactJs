import React, { Component } from 'react';
import './Product.css';

class CardComponent extends Component {

    state = {
        order:0
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        });
    }   

    handleMinus = () => {
        if (this.state.order > 0 ) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            });
        }
    }   
    
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/13/26783827/26783827_277ae360-92a3-4edc-8375-0e8fd2704a83_320_320.jpg" alt="product_image" />
                </div>
                <p className="product-title">Ayam Colonel Etanee Original</p>
                <p className="product-price">Rp 52.000</p>
                <div className="product-price">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardComponent;