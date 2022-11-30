import React from "react";
import IMG from "../common/IMG";

const LeftImage = () => {
  return (
    <>
      <div className="logoimg">
        <IMG src="images/123.png" className="img" alt="microsoftlogo"/>
        <p>
          <img src="images/excel.png" className="img" alt="excellogo" />
        </p>
        <p>
          <img src="images/pdfimg.png" className="img" alt="pdflogo" />
        </p>
        <p>
          <img src="images/pwimg.png" className="img" alt="powerpointlogo" />
        </p>
      </div>
    </>
  );
};

export default LeftImage;
