import React from 'react';

const OneDog = (props)  =>{
    console.log(props);
    const allToys =props.toys;
    const dogName = props.match.params.dogName
    const myToys = allToys[dogName];
    const allImages = props.dogImages
    const myImages = allImages[dogName]
    return(
        <div>
            <h2>
                {dogName}
            </h2>
        <ul>
            {myToys.map((toy)=>{
                return <li>{toy}</li>
            })}
        </ul>
        <ul>
            {myImages.map((jeff)=>{
                return <img src={jeff} alt="dog"/>
            })}
        </ul>
        </div>
    )
}

export default OneDog;