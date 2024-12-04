import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"; // Make sure you're using v2 import

const Items = ({ imagesData, onEdit, onRemove }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imagesData.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md flex flex-col items-start"
        >
          <img
            src={item.url}
            alt={`Image ${index}`}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />

          <div className="mb-4">
            <p className="font-bold text-lg">
              URL: {item.url.slice(0, 20) + "..."}
            </p>
            <p className="text-sm text-gray-600">
              Ready: {item.ready ? "Yes" : "No"}
            </p>
          </div>

          <div className="flex justify-start gap-2">
            <button
              onClick={() => onEdit(index)}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onRemove(index)}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
