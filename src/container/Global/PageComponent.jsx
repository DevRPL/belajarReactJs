import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PageComponent extends Component {

  render = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/lifeCycle" >LifeCycle</Link></li>
                </ul>
            </nav>
        </div>
    )
  }
}

export default PageComponent;
