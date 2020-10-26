import React, { Component, Fragment } from 'react';
import './Product.css';

class ProductComponent extends Component {

    state = {
        order:0
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }   

    handleMinus = () => {
        if (this.state.order > 0 ) {
            this.setState({
                order: this.state.order - 1
            });
        }
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
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/1/13/26783827/26783827_277ae360-92a3-4edc-8375-0e8fd2704a83_320_320.jpg" alt="product_image" />
                    </div>
                    <p className="product-title">Ayam Colonel Etanee Original</p>
                    <p className="product-price">Rp 52.000</p>
                    <div className="product-price">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ProductComponent;