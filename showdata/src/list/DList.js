import React from "react";

const DList = (props) => {
  return (
    <div>
      {/* {console.log(props.edu)} */}
      <ul>
        {props.edu.map((info, index) => (
          <li key={index}>{Object.values(info)}</li>
        ))}
      </ul>
    </div>
  );
};
export default DList;
