import React from 'react';

const OneDog = (props)  =>{
    console.log(props);
    const dogInfo = props.dogInfo;
    const dogName = props.match.params.dogName;
    const oneDogsInfo = dogInfo[dogName];
    const dogToysListItems = oneDogsInfo.toys.map(toy =>{
        return (
            <li>{toy}</li>
        )
    })
    // const allImages = props.dogImages
    // const myImages = allImages[dogName]
    return(
        <div>
            <h2>
                <h1>Hey {dogName} </h1>
                <h2>My owner is {oneDogsInfo.owner} </h2>
            </h2>
            <h3>My toys are:</h3>
            <ul>
                {dogToysListItems}
            </ul>
        
        {/* <ul>
            {myImages.map((jeff)=>{
                return <img src={jeff} alt="dog"/>
            })}
        </ul> */}
        </div>
    )
}

export default OneDog;