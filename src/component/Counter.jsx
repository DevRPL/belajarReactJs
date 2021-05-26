import React, { Component, Fragment } from 'react';


class Counter extends Component {
    
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
        return(
            <Fragment>
                <div className="input-group mb-3">
                    <button className="minus input-group-text" onClick={this.handleMinus}>-</button>
                    <input type="text"  className="form-control" value={this.state.order} readOnly/>
                    <button className="plus input-group-text" onClick={this.handlePlus}>+</button>
                </div>
            </Fragment>
        )
    }
}


export default Counter;