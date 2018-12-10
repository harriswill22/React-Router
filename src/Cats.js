import React from 'react';
import {Link} from 'react-router-dom'
const Cats =(props) => {
    return (
        <div>
        <h1>Cats</h1>
        <ul>
            <li>
                <Link to="/cats/oak">Oak</Link>
            </li>
            <li>
                <Link to="/cats/sham">ham</Link>
            </li>
        </ul>
        </div>
    );
};
export default Cats;