import React from 'react';
import './BLogPost/BLogPost.css';

const Post = (props) => {
    return (
		<div className="post">
			<div className="section-title">
				<div className="content">
					<p className="title">{props.data.title}</p>
					<p className="desc">{props.data.description}</p>
					<br/>
					<button onClick={ () => props.remove(props.data.id) }>remove</button>
				</div>
			</div>
		</div>
    )
}

export default Post;
