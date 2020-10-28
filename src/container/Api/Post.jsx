import React from 'react';
import './BLogPost/BLogPost.css';

const Post = (props) => {
    return (
		<div className="post">
			<div className="section-title">
				<div className="content">
					<p className="title">{props.title}</p>
					<p className="desc">{props.description}</p>
				</div>
			</div>
		</div>
    )
}

export default Post;
