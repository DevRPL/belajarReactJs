import React, { Component, Fragment } from 'react';
import './Product.css';
import CardComponent from './CardComponent';

class ProductComponent extends Component {

    state = {
        order:0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>    
                <div className="header">
                    <div className="logo">
                        <img src="https://s3.bukalapak.com/img/3114039532/large/Daging_Ayam_Utuh_Frozen_ukuran_08_09_Kg_Etanee.jpg" alt="product_image" />
                    </div>
                    <div className="troley">
                        <img src="https://s.kaskus.id/r480x480/images/fjb/2015/08/26/distributor_ayam_potong_segar_area_distributor_kwitang_7937597_1440598787.jpeg" alt="" />
                            <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardComponent onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default ProductComponent;