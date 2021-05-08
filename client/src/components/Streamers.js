import React from 'react';

const Streamers = ({match}) => {
    return (
        <div>
            <h1>Stream - {match.params.id}</h1>
        </div>
    )
}

export default Streamers;