import React, { Component } from 'react';
import BLogPost from '../Api/BLogPost/BLogPost.jsx';

class DynamicStateLessComponent extends Component {
    
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            });    
        }, 15000);
    }
    
    render() {
        return (
            <div>
                <BLogPost />
            </div>
        );
    }
}

export default DynamicStateLessComponent;