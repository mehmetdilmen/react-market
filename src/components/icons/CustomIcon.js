// Import React
import React from "react";

function CustomIcon(props) {
  // Descturct Props
  const { size, name, status } = props;

  return (
    <>
      {React.cloneElement(name, {
        width: size,
        height: size,
        color: `${status}`,
      })}
    </>
  );
}

export default CustomIcon;
