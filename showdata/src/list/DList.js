import React from 'react';

const DList =(props)=>{
    return(
        <div>
            {/* {console.log(props.edu)} */}
            <ul>
            {
                props.edu.map(info=>
                    <li>{Object.values(info)}</li>       
                )
            }
            </ul>
        </div>
    );
}
export default DList;