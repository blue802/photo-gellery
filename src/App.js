import React, { useState } from "react";
import "./App.css";

import UploadForm from "./components/UploadForm/UploadForm";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import ModalImage from "./components/ModalImage/ModalImage";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>Welcome to Blue's Gallery</h1>
      </header>
      <div className="container">
        <UploadForm />
        <ImageGrid setSelectedImage={setSelectedImage} />
      </div>
      {selectedImage && (
        <ModalImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
