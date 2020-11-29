import React, { Component, Fragment } from 'react';
import { RootContext } from '../container/Default/DynamicStateLessComponent';
import ActionType from '../Redux/reducer/GlobalActionType';

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
        return(
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <button className="minus" onClick={() => value.dispatch({type:ActionType.MINUSORDER})}>-</button>
                                <input type="text" value={value.state.total} readOnly/>
                                <button className="plus" onClick={() => value.dispatch({type:ActionType.PLUSORDER})}>+</button>
                            </Fragment>
                        )    
                    }
                }
            </RootContext.Consumer>
        )
    }
}

export default Counter;