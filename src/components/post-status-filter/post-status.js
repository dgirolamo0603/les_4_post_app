import React from 'react';
import './post-status-filter.css';

const PostStatus=()=>{
    return(
        <div className="btn-group">
            <button type="button" classNmae="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}
export default PostStatus;