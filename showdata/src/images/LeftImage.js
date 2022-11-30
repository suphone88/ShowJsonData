import React from "react";
import IMG from "../common/IMG";

const LeftImage = () => {
  return (
    <>
      <div className="logoimg">
        <p>
          <IMG src="images/123.png" className="img" alt="microsoftlogo" />
        </p>
        <p>
          <IMG src="images/excel.png" className="img" alt="excellogo" />
        </p>
        <p>
          <IMG src="images/pdfimg.png" className="img" alt="pdflogo" />
        </p>
        <p>
          <IMG src="images/pwimg.png" className="img" alt="powerpointlogo" />
        </p>
      </div>
    </>
  );
};

export default LeftImage;
