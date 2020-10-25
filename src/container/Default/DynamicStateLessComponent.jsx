import React, { Component } from 'react';
import DynamicStateFullComponent from '../../component/dynamic/DynamicStateFullComponent';

class DynamicStateLessComponent extends Component {
    render() {
        return (
            <div>
                <DynamicStateFullComponent 
                    name="jamil" 
                    address="bandung"
                />
            </div>
        )
    }
}

export default DynamicStateLessComponent;