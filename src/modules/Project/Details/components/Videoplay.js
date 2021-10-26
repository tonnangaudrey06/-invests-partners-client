import React from 'react';
import ReactPlayer from 'react-player';

const Videoplay = (props) => {
    const { video } = props;
    return (
        <ReactPlayer controls height="100%" width="100%" className="rounded shadow-sm" url={video} />
    );
};

export default Videoplay;