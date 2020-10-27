import React, { Component } from 'react';
import LifeCycle from '../../LifeCycle/LifeCycle.jsx';

class DynamicStateLessComponent extends Component {
    render() {
        return (
            <div>
                {/* <DynamicStateFullComponent 
                    name="jamil" 
                    address="bandung"
                />
                <ProductComponent /> */}
                <LifeCycle />
            </div>
        )
    }
}

export default DynamicStateLessComponent;