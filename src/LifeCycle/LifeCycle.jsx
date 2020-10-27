import React, { Component } from 'react';
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
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({
                count: 2
            });
        }, 3000);
    }
    
    shouldComponentUpdate(prevProps, nextState) {
        console.log("shouldComponentUpdate");
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
    
    render() {
        console.log("render");
        return(
            <div>
                <button className="btn">LifeCycle {this.state.count}</button>
            </div>
        )
    }
}

export default LifeCycle;