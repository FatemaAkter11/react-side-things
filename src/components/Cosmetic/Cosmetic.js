import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const { name, balance, gender, _id } = props.cosmetic;

    const handlePurchase = id => {
        //set to local storage
        console.log(id);
        addToDb(id);
    }
    const handleRemove = id => {
        deleteFromDb(id);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <h4>Id:{_id} Balance: {balance}</h4>
            <p> <small>Gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;