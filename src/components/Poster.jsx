import React, { useState, useEffect } from "react";

export default function Poster({ ImagesData }) {
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const initialImages = ImagesData.map((image) => {
      if (image.error) {
        return {
          url: "https://img.freepik.com/premium-vector/loading-symbol-vector_427757-728.jpg?ga=GA1.1.754928087.1729416869&semt=ais_hybrid",
          ready: true,
          error: true,
          isLoading: true,
        };
      }
      return image.ready ? image : null;
    }).filter(Boolean);

    while (initialImages.length < 4) {
      initialImages.push({
        url: "https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?ga=GA1.1.754928087.1729416869&semt=ais_hybrid",
        ready: true,
        error: false,
      });
    }

    setFilteredImages(initialImages);

    const timers = initialImages.map((image, index) => {
      if (image.isLoading) {
        return setTimeout(() => {
          setFilteredImages((prevImages) =>
            prevImages.map((img, i) =>
              i === index
                ? {
                    ...img,
                    url: "https://media.istockphoto.com/id/1432243027/photo/3d-rendering-of-framed-lighten-x-alphabet-shape-on-grunge-floor.webp?a=1&b=1&s=612x612&w=0&k=20&c=JFgjtk8MZ8AFZqbQSYAbpSi-OjMalY9FCSXrF3wVlmM=",
                    isLoading: false,
                  }
                : img
            )
          );
        }, 5000);
      }
      return null;
    });

    return () => {
      timers.forEach((timer) => timer && clearTimeout(timer));
    };
  }, [ImagesData]);

  const errorCount = filteredImages.filter((image) => image.error).length;

  return (
    <div className="text-white bg-slate-900 h-56 w-full flex items-center gap-6 px-6 py-4 rounded-lg justify-center relative">
      <div className="grid grid-cols-2">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center rounded-lg group"
          >
            <img
              src={image.url}
              alt={`img ${index + 1}`}
              className="h-14 w-14 object-cover rounded-full"
            />
            <div className="tooltip group-hover:block hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm p-2 rounded-md">
              <p>URL: {image.url}</p>
              <p>Ready: {image.ready ? "Ready" : "Not Ready"}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-left space-y-2">
        <h1 className="text-2xl font-bold">Explorin Academy</h1>
        <h3 className="text-lg text-gray-400">3+ Offline Centers</h3>
      </div>
      <div className="text-left ml-32">
        <p>
          {errorCount > 0 ? (
            <span className="text-red-500">
              <img
                className="w-32 h-32 object-cover"
                src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?ga=GA1.1.754928087.1729416869&semt=ais_hybrid"
                alt="Error"
              />
            </span>
          ) : (
            <span className="text-green-500">
              <img
                className="w-32 h-32 object-cover"
                src="https://img.freepik.com/free-vector/ok-concept-illustration_114360-2060.jpg?ga=GA1.1.754928087.1729416869&semt=ais_hybrid"
                alt="Success"
              />
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
