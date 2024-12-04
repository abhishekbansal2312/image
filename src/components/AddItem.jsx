import React from "react";

function ImageForm({ handleSubmit, form, setForm, error }) {
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({
      ...form,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className=" bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-semibold mb-4">Image URL Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="url"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter image URL"
              value={form.url}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ready"
              className="block text-sm font-medium text-gray-700"
            >
              Ready
            </label>
            <input
              type="checkbox"
              id="ready"
              checked={form.ready}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="error"
              className="block text-sm font-medium text-gray-700"
            >
              Error
            </label>
            <input
              type="checkbox"
              id="error"
              checked={form.error}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>

        {error && (
          <div className="mt-6 text-center text-red-500">
            <p>Invalid URL! Please enter a valid image URL.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageForm;
