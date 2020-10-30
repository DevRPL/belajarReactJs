import React, { Component } from 'react';
import axios from 'axios';

class DetailPost extends Component {
	state = {
		detail: {
			user: '',
			body: '',
			title: '',
		}
	}

  	componentDidMount() {
		  let id = this.props.match.params.id;
		axios({
			method: 'get',
			url: `http://localhost:8000/post/${id}`,
			responseType: 'json',
		})
		.then(json => {
			let data = json.data;
			this.setState({
				detail: {
					user: data.user.name,
					title: data.title,
					body: data.body,
				}
			})
		})
  	}

	render = () => {
		return (
			<div>
				<p>User : {this.state.detail.user}</p>
				<p>Title : {this.state.detail.title}</p>
				<p>Body : {this.state.detail.body}</p>
			</div>
		)
	}
}

export default DetailPost;
