import React from "react";
import { Button } from "antd";

import "../../assets/styles/_footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Button type="link" size={"small"} className="link">
          ©2019 Market
        </Button>
        <div className="dot-link">.</div>
        <Button type="link" size={"small"} className="link">
          Privacy Policy
        </Button>
      </div>
    </div>
  );
}

export default Footer;
