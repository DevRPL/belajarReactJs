import React from 'react';
import './DynamicStateFullComponent.css';

const DynamicStateFullComponent = (props) => {
    return (
        <div className="img-thumb">
            <p>Name : { props.name }</p>
            <p>Address : { props.address }</p>
        </div>
    );
}

DynamicStateFullComponent.defaultProps = {
    name: '',
    address: ''
}


export default DynamicStateFullComponent;