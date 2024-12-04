import React from "react";

const Items = ({ imagesData, onEdit, onRemove }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {imagesData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-md">
          {/* Set a fixed height and width to make the image square */}
          <img
            src={item.url}
            alt="Image"
            className="w-full h-48 object-cover mb-4 rounded-md" // Square image
          />
          <button
            onClick={() => onEdit(index)}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => onRemove(index)}
            className="bg-red-500 text-white p-2 rounded-md ml-2"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;
