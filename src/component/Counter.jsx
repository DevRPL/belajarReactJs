import React, { Component, Fragment } from 'react';
import { GlobalConsumer } from '../Context/Context.jsx';
import ActionType from '../Redux/reducer/GlobalActionType.js';

class Counter extends Component {
    
    /* state = {
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
    } */

    render() {
        console.log(this.props.state.total)
        return(
            <Fragment>
                <button className="minus" onClick={() => this.props.dispatch({type:ActionType.MINUSORDER})}>-</button>
                <input type="text" value={this.props.state.total} readOnly/>
                <button className="plus" onClick={() => this.props.dispatch({type:ActionType.PLUSORDER})}>+</button>
            </Fragment>
        )
    }
}

export default GlobalConsumer(Counter);