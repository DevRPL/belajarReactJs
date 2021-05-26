import React, { Component, Fragment } from 'react';
import Counter from '../../component/Counter';
import './Product.css';

class CardComponent extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-header">
                                {this.props.children}
                            </div>
                        <img className="card-img-top" src="https://s3.bukalapak.com/img/3114039532/large/Daging_Ayam_Utuh_Frozen_ukuran_08_09_Kg_Etanee.jpg" alt="" />
                            <div className="card-body">
                                <Counter onCounterChange={(value) => this.props.onCounterChange(value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardComponent;