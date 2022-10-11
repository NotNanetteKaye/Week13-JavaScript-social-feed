import React from 'react';

const EntryPresenter = ({postObject}) => {
    return ( 
        <div>
            <h1>{postObject.name}</h1>
            <p>{postObject.post}</p>
        </div>
     );
} 
 
export default EntryPresenter;