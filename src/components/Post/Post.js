import React from 'react';

const Post = (props) => {
    const {userId, id, title, body} = props.post;

    return (
        <div>
            <div className='item'>
                userId:{userId}
                id:{id}
                title:{title}
                body:{body}
            </div>
        </div>
    );
};

export default Post;