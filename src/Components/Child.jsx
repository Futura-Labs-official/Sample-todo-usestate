import React from 'react';

const Child = ({ updateCounter }) => {
    return (
        <div>
            Second Component <button onClick={() => updateCounter(prev => prev + 2)}>+</button>
        </div>
    );
}

export default Child;
