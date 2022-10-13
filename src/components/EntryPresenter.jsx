import React from 'react';
import CustomDislikeButton from './CustomManyButtons/CustomDislikeButton';
import CustomLikeButton from './CustomManyButtons/CustomLikeButton';

const EntryPresenter = ({postObject}) => {
    return ( 
        <div>
            <h1>{postObject.name}</h1>
            <p>{postObject.post}</p>
            <CustomDislikeButton message="Dislike :("/>
            <CustomLikeButton message="Like!"/>
        </div>
     );
} 
 
export default EntryPresenter;