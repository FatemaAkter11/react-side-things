import React from 'react';
import { add, multi } from '../../utilities/storage';

const Cosmetics = () => {
    const first = 44;
    const second = 44;
    const addition = add(first, second);
    const multiply = multi(first, second);
    console.log(addition, multiply);
    return (
        <div>

        </div>
    );
};

export default Cosmetics;