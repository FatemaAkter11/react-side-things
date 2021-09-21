import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add, multi } from '../../utilities/storage';

const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h2>Shop My Cosmetics</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;


/*
 const first = 44;
    const second = 44;
    const addition = add(first, second);
    const multiply = multi(first, second);
    console.log(addition, multiply);
*/

/*
const cosmetics = [
        { id: 1, name: 'Alta', price: 1200 },
        { id: 2, name: 'snow', price: 200 },
        { id: 3, name: 'powder', price: 100 }
    ]
*/