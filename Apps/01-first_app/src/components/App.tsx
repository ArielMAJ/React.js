import React from "react";
import Heading from "./Heading";
import LoremList from "./LoremList";
import FlatIconImage from "./FlatIconImage";
import SimpleImage from "./SimpleImage";
import Footer from "./Footer";

function App() {
  const random_img_link: string = "https://picsum.photos/200";

  return (
    <div>
      <Heading />
      <LoremList />

      <h2>Flaticon Images</h2>
      <FlatIconImage
        src="https://cdn-icons-png.flaticon.com/512/763/763789.png"
        title="cat icons"
        href="https://www.flaticon.com/free-icons/cat"
        author="Cat icons created by Freepik - Flaticon"
      />
      <FlatIconImage
        src="https://cdn-icons-png.flaticon.com/512/2338/2338317.png"
        title="cute icons"
        href="https://www.flaticon.com/free-icons/cute"
        author="Cute icons created by BomSymbols - Flaticon"
      />
      <FlatIconImage
        src="https://cdn-icons-png.flaticon.com/512/2201/2201716.png"
        title="cute icons"
        href="https://www.flaticon.com/free-icons/cute"
        author="Cute icons created by BomSymbols - Flaticon"
      />
      <FlatIconImage
        src="https://cdn-icons-png.flaticon.com/512/9558/9558738.png"
        title="cute icons"
        href="https://www.flaticon.com/free-icons/cute"
        author="Cute icons created by Rohim - Flaticon"
      />

      <h2>Random Images</h2>
      <SimpleImage src={random_img_link} />
      <SimpleImage src={random_img_link + "?grayscale"} />

      <Footer />
    </div>
  );
}

export default App;
