import axios from 'axios'
import { useEffect, useState } from 'react'

export default function EditComment ({comment}) {


const commentEdit = {
    userId: comment.userId,
    postId: comment.postId,
    commentText: comment.commentText
}

const [editComment, setEditComment] = useState(commentEdit)

    const editHandleChange = (event) => {
        setEditComment({...editComment, ['commentText']: event.target.value})
    }
    
    const editHandleSubmit = (event) => {
    event.preventDefault();
        editComments(editComment)
        setEditComment(commentEdit)
        window.location.reload()
    }
    const editComments = async() => {
        const post = await axios.put(`http://localhost:3001/comment/${comment.id}/`, editComment)
        console.log(post.data)
        setEditComment(post.data)
    }

    return (
        <div>
                                <form onSubmit={editHandleSubmit}>
                                    <input  
                                        type="text"
                                        onChange={editHandleChange}
                                        value={commentEdit.comment}
                                                                />
        
                                    <button className="button-styling" type="submit">
                                    Edit Comment
                                    </button>
                                </form>
        
                            </div>

        )
}