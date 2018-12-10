import React from 'react';
import { Link } from 'react-router-dom';

const Dogs = (props)=>{
const dogListItems = props.dogList.map(dogName =>{
    return (
        <li>
            <Link to={`/dogs/${dogName}`}>{dogName}</Link>
        </li>
    );
});
return(
    <div>
    <h1>
        Dogs
    </h1>
    <ul>
        {dogListItems}
    </ul>
</div>

)





}

export default Dogs;