import React, { Component, Fragment } from 'react';
import Post from '../Post.jsx';
import axios from 'axios';

class BLogPost extends Component {

	state = {
		post: [],
		fromBLogPost: {
			title: '',
			body: '',
			description: '',
		}
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
		
		this.getPostAPi();
	}

	getPostAPi = () => {
		axios({
			method: 'get',
			url: 'http://localhost:8000/post',
			responseType: 'json',
		})
		.then(json => {
			this.setState({
				post:json.data
			})
		})
	}

	postDataToAPi = () => {
		console.log(this.state.fromBLogPost);
		axios({
			method: 'post',
			url: 'http://localhost:8000/post/store',
			data: this.state.fromBLogPost,
			responseType: 'json'
		})
		.then(json => {
			this.getPostAPi(json);
		}, (err) => {
			console.log(err);
		})
	}

	handleFormChange = (evt) => {
		let fromBLogPostNew = {...this.state.fromBLogPost};
		fromBLogPostNew[evt.target.name] = evt.target.value;
		this.setState({
			fromBLogPost: fromBLogPostNew
		}, () => {
			console.log(this.state.fromBLogPost)
		})
	}

	handleSubmit = () => {
		this.postDataToAPi();
	}

	handleRemove = (data) => {
		axios({
			method: 'delete',
			url: 'http://localhost:8000/post/delete/' + data,
			responseType: 'json'
		})
		.then(json => {
			this.getPostAPi(json);
		})
	}

  render = () => {
    return (
		<Fragment>

		<div className="form-add-post">
			<input type="text" name="title" onChange={this.handleFormChange}/><br></br><br></br> 
			<input type="text" name="body" onChange={this.handleFormChange}/><br></br><br></br> 
			<textarea name="description" onChange={this.handleFormChange}></textarea> <br></br><br></br>
			<button onClick={this.handleSubmit}>Simpan</button>
		</div><br></br> <br></br>

			{
				this.state.post.map(post => {
					return <Post key={post.id} data={post} remove={this.handleRemove}/>
				})
			}
		</Fragment>
    )
  }
}

export default BLogPost;
