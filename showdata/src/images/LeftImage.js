import React from "react";
import IMG from "../common/IMG";

const LeftImage = () => {
  return (
    <>
      <div className="logoimg">
          <IMG src="images/123.png" className="img" alt="microsoftlogo" />
          <IMG src="images/excel.png" className="img" alt="excellogo" />
          <IMG src="images/pdfimg.png" className="img" alt="pdflogo" />
          <IMG src="images/pwimg.png" className="img" alt="powerpointlogo" />
      </div>
    </>
  );
};

export default LeftImage;
