import React from 'react';

const Calculation = (props) => {
    return (
        <div className="equation">
            <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
          </div>
    );
};

export default Calculation;