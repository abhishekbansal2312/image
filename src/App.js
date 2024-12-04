import "./App.css";
import Image from "./Image";

function App() {
  const images = [
    {
      url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
      ready: false,
      error: true,
    },
    {
      url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
      ready: false,
      error: true,
    },
    {
      url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
      ready: true,
      error: false,
    },
    {
      url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
      ready: true,
      error: false,
    },
    {
      url: "https://extension.umn.edu/sites/extension.umn.edu/files/apple-scab-1.jpg",
      ready: true,
      error: false,
    },
  ];

  return (
    <div>
      <Image name="Explorin Academy" count={images.length} images={images} />
    </div>
  );
}

export default App;
