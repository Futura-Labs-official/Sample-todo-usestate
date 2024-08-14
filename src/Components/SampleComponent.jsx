import React, { useState } from 'react';
import Child from './Child';

const SampleComponent = () => {

    const [counter, setCounter] = useState(0)

    // const updateCounter = (count) => {
    //     setCounter(counter + count)
    // }

    return (
        <div>
            First Component [{counter}]
            <Child updateCounter={setCounter} />
        </div>
    );
}

export default SampleComponent;
