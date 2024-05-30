import { useState } from "react";

const ImageCell = ({ imageSrc, isFlipped = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Styles
  const ImageCellStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: isHovered ? "#e3e0f6" : "#e8e5e2",
    cursor: "pointer",
  };

  if (isFlipped) {
    return (
      <img
        src={imageSrc}
        style={ImageCellStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    );
  }
  return (
    <div
      onClick={() => onClick()}
      style={ImageCellStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></div>
  );
};

export default ImageCell;
