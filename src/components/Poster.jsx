import React, { useState, useEffect } from "react";

export default function Poster({ ImagesData, count }) {
  const [filterImage, setFilterImage] = useState([]);

  useEffect(() => {
    const filteredImages = ImagesData.filter((image) => image.ready);
    setFilterImage(filteredImages);
  }, [ImagesData]);

  console.log(filterImage);

  return <div className="text-xl bg-slate-900 h-56 w-full"></div>;
}
