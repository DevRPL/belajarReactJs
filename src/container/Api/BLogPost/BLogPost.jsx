import React, { Component, Fragment } from 'react';
import Post from '../Post.jsx';
import axios from 'axios';

class BLogPost extends Component {

	state = {
		post: []
	}
	componentDidMount() {
		/*
			==================================
				GET API FETCH
			==================================

			fetch('http://localhost:8000/post')
			.then(response => response.json())
			.then(json => {
				this.setState({
					post: json
				})
			});

			==================================
				GET API AXIOS
			==================================

			axios({
				method: 'get',
				url: 'http://localhost:8000/post',
				responseType: 'json'
			})
			.then(json => {
				this.setState({
					post: json.data
				})
			})
		*/
	}

  render = () => {
    return (
		<Fragment>
			{
				this.state.post.map(post => {
					return <Post key={post.id} title={post.title} description={post.description}/>
				})
			}
		</Fragment>
    )
  }
}

export default BLogPost;