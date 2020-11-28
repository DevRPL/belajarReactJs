import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
            <Fragment>
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input type="text" value={this.props.order} readOnly/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => {dispatch({type: ActionType.PLUSORDER})},
        handleMinus: () => {dispatch({type: ActionType.MINUSORDER})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);