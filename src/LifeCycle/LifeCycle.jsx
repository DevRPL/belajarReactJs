import React, { Component } from 'react';
import { GlobalConsumer } from '../Context/Context.jsx';
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
                <div>
                    <button className="btn" onClick={this.changeCount}>LifeCycle {this.state.count}</button>
                    <hr></hr>
                    <p>total order : {this.props.state.total}</p>
                </div>
        )
    }
}

export default GlobalConsumer(LifeCycle);