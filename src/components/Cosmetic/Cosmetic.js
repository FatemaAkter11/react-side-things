import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, balance, gender } = props.cosmetic;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Balance: {balance}</h4>
            <small>Gender: {gender}</small>
        </div>
    );
};

export default Cosmetic;