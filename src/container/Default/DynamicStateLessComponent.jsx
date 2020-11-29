import React, { Component, createContext, Fragment } from 'react';
import BLogPost from '../Api/BLogPost/BLogPost.jsx';
import { BrowserRouter, Route } from "react-router-dom";
import ProductComponent from '../Product/ProductComponent.jsx';
import LifeCycle from '../../LifeCycle/LifeCycle.jsx';
import PageComponent from '../Global/PageComponent.jsx';
import DetailPost from '../Api/BLogPost/DetailPost.jsx';
import ActionType from '../../Redux/reducer/GlobalActionType.js';

export const RootContext = createContext();

const Provider = RootContext.Provider;

class DynamicStateLessComponent extends Component {
    
    state = {
        showComponent: true,
        total: 0
    }

    dispatch = (action) => {
        const totalOrder = this.state.total;
        if (action.type === ActionType.PLUSORDER) {
            return this.setState({
                total: totalOrder + 1
            })
        } else if (action.type === ActionType.MINUSORDER) {
            let total = 0;
            if (totalOrder > 0) {
                total = totalOrder - 1;
            } 
            return this.setState({
                total: total
            })
        }
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

                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
                    <Fragment>
                        <Route path="/" exact component={BLogPost} />
                        <Route path="/detail-post/:id" component={DetailPost} />
                        <Route path="/product" component={ProductComponent} />
                        <Route path="/lifeCycle" component={LifeCycle} />
                    </Fragment>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default DynamicStateLessComponent;