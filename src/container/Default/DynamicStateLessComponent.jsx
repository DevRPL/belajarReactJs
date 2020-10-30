import React, { Component, Fragment } from 'react';
import BLogPost from '../Api/BLogPost/BLogPost.jsx';
import { BrowserRouter, Route } from "react-router-dom";
import ProductComponent from '../Product/ProductComponent.jsx';
import LifeCycle from '../../LifeCycle/LifeCycle.jsx';
import PageComponent from '../Global/PageComponent.jsx';
import DetailPost from '../Api/BLogPost/DetailPost.jsx';

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
            <BrowserRouter>
                <PageComponent />
                <Fragment>
                    <Route path="/" exact component={BLogPost} />
                    <Route path="/detail-post/:id" component={DetailPost} />
                    <Route path="/product" component={ProductComponent} />
                    <Route path="/lifeCycle" component={LifeCycle} />
                </Fragment>
            </BrowserRouter>
        );
    }
}

export default DynamicStateLessComponent;