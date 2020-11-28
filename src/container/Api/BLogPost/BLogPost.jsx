import React, { Component, Fragment } from 'react';
import Post from '../Post.jsx';
import axios from 'axios';

class BLogPost extends Component {

	state = {
		post: [],
		fromBLogPost: {
			title: '',
			body: '',
			description: ''
		},
		isUpdate: false
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
		axios({
			method: 'post',
			url: 'http://localhost:8000/post/store',
			data: this.state.fromBLogPost,
			responseType: 'json'
		})
		.then(json => {
			this.getPostAPi(json);
			this.setState({
				fromBLogPost: {
					title: '',
					body: '',
					description: ''
				}
			})
		}, (err) => {
			console.log(err);
		})
	}

	putDataToAPi = () => {
		const data = this.state.fromBLogPost;
		axios({
			method: 'put',
			url: 'http://localhost:8000/post/update/' + data.id,
			data: {
				title: data.title,
				body: data.body,
				description: data.description,
			},
			responseType: 'json'
		})
		.then(json => {
			this.getPostAPi(json.data);
			this.setState({
				isUpdate: false,
				fromBLogPost: {
					title: '',
					body: '',
					description: ''
				}
			})
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

	handleUpdate = (data) => {
		console.log(data);
		this.setState({
			fromBLogPost: data,
			isUpdate: true
		})
	}

	handleSubmit = () => {
		if (this.state.isUpdate) {
			this.putDataToAPi();
		} else {
			this.postDataToAPi();	
		}
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

	handleDetail = (id) => {
		this.props.history.push(`/detail-post/${id}`);
	}

  render = () => {
    return (
		<Fragment>
			<div className="container pt-3">
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text" className="form-control" name="title" onChange={this.handleFormChange} value={this.state.fromBLogPost.title} placeholder="Enter Title" />
				</div>
				<div className="form-group">
					<label htmlFor="body">Body</label>
					<input type="text" name="body" onChange={this.handleFormChange}  value={this.state.fromBLogPost.body} className="form-control" placeholder="Body" />
				</div>
				<div className="form-group">
					<label htmlFor="description">description</label>
					<input type="text" name="description" onChange={this.handleFormChange} value={this.state.fromBLogPost.description} className="form-control" placeholder="Description" />
				</div>
				<button onClick={this.handleSubmit} className="btn btn-primary">
					{ !this.state.isUpdate ? 'Save': 'Update' }
				</button>
			</div>

			{
				this.state.post.map(post => {
					return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail}/>
				})
			}
		</Fragment>
    )
  }
}

export default BLogPost;
