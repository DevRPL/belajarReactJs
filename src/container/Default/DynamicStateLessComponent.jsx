import React, { Component } from 'react';
import DynamicStateFullComponent from '../../component/dynamic/DynamicStateFullComponent';
import ProductComponent from '../Product/ProductComponent.jsx';

class DynamicStateLessComponent extends Component {
    render() {
        return (
            <div>
                <DynamicStateFullComponent 
                    name="jamil" 
                    address="bandung"
                />
                <ProductComponent />
            </div>
        )
    }
}

export default DynamicStateLessComponent;