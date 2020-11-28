import React, { Component } from 'react';
import './Product.css';
import CardComponent from './CardComponent';
import { connect } from 'react-redux';

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
                    <span className="badge-primary">{this.props.order}</span>
                </CardComponent>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.total
    }
}

export default connect(mapStateToProps)(ProductComponent);