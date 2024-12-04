import React, { useState, useEffect } from "react";

const Image = ({ name, count, images }) => {
  const [readyImages, setReadyImages] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const filteredImages = images.filter((image) => image.ready);
    setReadyImages(filteredImages);

    const hasError = images.filter((image) => image.error);
    setError(hasError);

    while (filteredImages.length < 4) {
      filteredImages.push({
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqd4Cjwe9l6UgjpslhkZp3CiXG5LRp-IOuiAqzXvb0dEY7Mn-ddDEHHcuMdIhE5bp1dKA&usqp=CAU",
        ready: true,
        error: false,
      });
    }
    setReadyImages(filteredImages);
  }, [images]);

  return (
    <div className="p-4 max-w-screen min-w-20 flex bg-slate-800 justify-center gap-20 items-center">
      <div className="grid grid-cols-2 max-w-md">
        {readyImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-16 h-16 border border-gray-600 rounded-full overflow-hidden bg-gray-100"
          >
            <img src={image.url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text text-white mb-4">{name}</h2>
        <p className="text-lg mb-4 text-white">3+ Offline Centers</p>
      </div>
      <div>
        {error && (
          <div className="flex justify-center items-center mt-4">
            <img src="image.png" className="w-16 h-16 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
