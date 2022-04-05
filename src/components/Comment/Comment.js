import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email, body} = props.comment;
    return (
        <div>
            <div>
                <div className='item'>
                    postId:{postId}
                    id:{id}
                    name:{name}
                    email:{email}
                    body:{body}
                </div>
            </div>
        </div>
    );
};

export default Comment;