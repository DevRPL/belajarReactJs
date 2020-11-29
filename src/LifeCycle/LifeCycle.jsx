import React, { Component } from 'react';
import { RootContext } from '../container/Default/DynamicStateLessComponent';
import './LifeCycle.css';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) { // Rarely Used
        console.log("getDerivedStateFromProps");
        return null;
    }
    
    componentDidMount(nextProps, nextState) {
        setTimeout(() => {
            this.setState({
                count: 2
            });
        }, 2000);
    }
    
    shouldComponentUpdate(prevProps, nextState) {
        if (nextState.count > 4) {
            return false;   
        }

        return true;
    }   

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return(
                <RootContext.Consumer>
                    {
                        value => {
                            return (
                                <div>
                                    <button className="btn" onClick={this.changeCount}>LifeCycle {this.state.count}</button>
                                    <hr></hr>
                                    <p>total order : {value.state.total}</p>
                                </div>
                            )
                        }
                    }
                </RootContext.Consumer>
        )
    }
}

export default LifeCycle;