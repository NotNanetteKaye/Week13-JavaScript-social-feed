import React from 'react';

const EntryPresenter = ({postObject}) => {
    return ( 
        <div>
            <h1>{postObject.Name}</h1>
        </div>
     );
}
 
export default EntryPresenter;