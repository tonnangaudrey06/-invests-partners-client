import React from 'react';
import ReactPlayer from 'react-player';

const Videoplay = () => {
    return (
        <ReactPlayer controls height="100%" width="100%" className="rounded shadow-sm" url="https://www.youtube.com/watch?v=7sDY4m8KNLc" />
    );
};

export default Videoplay;