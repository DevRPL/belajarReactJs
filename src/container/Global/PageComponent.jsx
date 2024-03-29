import React, { Component, Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

class PageComponent extends Component {

  render = () => {
    return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
				<Link className="navbar-brand" to="/">
					<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="30" height="30" alt="" />
				</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/product">Product</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/lifeCycle" >LifeCycle</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</Fragment>
    )
  }
}

export default PageComponent;
