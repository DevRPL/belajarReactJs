import React, { Component } from 'react';
import LifeCycle from '../../LifeCycle/LifeCycle.jsx';

class DynamicStateLessComponent extends Component {
    
    state = {
        showComponent: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showComponent: false
            });    
        }, 3000);
    }
    
    render() {
        return (
            <div>
                {
                    this.state.showComponent ? <LifeCycle /> : null
                }
            </div>
        );
    }
}

export default DynamicStateLessComponent;