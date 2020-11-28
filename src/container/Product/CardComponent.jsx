import React, { Component, Fragment } from 'react';
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
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-header">
                                {this.props.children}
                            </div>
                        <img className="card-img-top" src="https://s3.bukalapak.com/img/3114039532/large/Daging_Ayam_Utuh_Frozen_ukuran_08_09_Kg_Etanee.jpg" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text</p>
                                <button classNameName="minus" onClick={this.handleMinus}>-</button>
                                <input type="text" value={this.state.order} />
                                <button classNameName="plus" onClick={this.handlePlus}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardComponent;