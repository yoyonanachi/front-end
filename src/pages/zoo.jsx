import "./tailwind.css"
import { useState } from 'react'
import fox from './zoo_picture/fox.jpg'
import penguin from './zoo_picture/penguin.jpg'
import polar_bear from './zoo_picture/polar_bear.jpg'

const images = [
    fox,
    penguin,
    polar_bear
];
const names=[
    "fox",
    "penguin",
    "polar_bear"
];
  
function Zoo() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    function handleButtonClick(index) {
      setSelectedImageIndex(index);
    }
  
    return (
      <div>
        <div>
          {images.map((image, index) => (
            <button key={index} onClick={() => handleButtonClick(index)} style={{ marginRight: "20px" }}>
              {names[index]}
            </button>
          ))}
        </div>
        <div>
          <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} style={{ width: "600px", height: "400px" }}/>
        </div>
      </div>
    );
}
  
export default Zoo;
/*export default function About() {
    return <h1 class="mt-6 ml-8">Here is Zoo!</h1>;
}*/