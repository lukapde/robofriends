import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ marginTop: '30px', overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;