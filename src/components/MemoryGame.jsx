import ImageCell from "./ImageCell";
import { useState } from "react";
var lodash = require("lodash");

const images = [
  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
  "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851",
  "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
  "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
];
const shuffledImages = lodash.shuffle(images.concat(images));

const MemoryGame = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [foundImages, setFoundImages] = useState([]);

  // Styles
  const containerStyle = {
    marginBottom: "150px",
    maxWidth: "500px",
    textAlign: "center",
    margin: "auto",
  };

  const gridAreaStyle = {
    display: "grid",
    columnGap: "20px",
    rowGap: "20px",
    gridTemplateColumns: "repeat(4, 1fr)",
  };

  const handleImageClick = (idx) => {
    if (foundImages.includes(idx)) return;
    if (flippedIndex === idx) return;
    if (shuffledImages[flippedIndex] === shuffledImages[idx]) {
      setFoundImages((prevState) => [...prevState, idx, flippedIndex]);
    }
    setFlippedIndex(idx);
  };

  const isFlipped = (idx) => {
    if (flippedIndex === idx) return true;
    if (foundImages.includes(idx)) return true;
    return false;
  };

  return (
    <div style={containerStyle}>
      <h1>Memory Game</h1>
      <div style={gridAreaStyle}>
        {shuffledImages.map((imageUrl, idx) => (
          <ImageCell
            key={idx}
            imageSrc={imageUrl}
            isFlipped={isFlipped(idx)}
            onClick={() => handleImageClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
