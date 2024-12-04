import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import Poster from "../components/Poster";
import Modal from "../components/Modal";

const Image = () => {
  const [ImagesData, setImagesData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    url: "",
    ready: false,
    error: false,
  });
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setImagesData(JSON.parse(storedItems));
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImageData = [...ImagesData, form];
    setImagesData(newImageData);
    localStorage.setItem("items", JSON.stringify(newImageData));
    setForm({ ...form, url: "", ready: false, error: false });
    setShowModal(false);
  };

  return (
    <div className="container min-h-screen  bg-black">
      <div className="p-4 max-w-screen flex bg-slate-800 justify-center gap-20 items-center">
        <div className="bg-slate-800 p-4 rounded-lg shadow-md w-1/2">
          <Poster />
        </div>
        <div>
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={() => setShowModal(true)}
          >
            Add Item
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={editIndex === -1 ? "Add Item" : "Edit Item"}
        >
          <AddItem
            form={form}
            handleSubmit={handleSubmit}
            setForm={setForm}
            onCancel={() => setShowModal(false)}
          />
        </Modal>
      )}
      <div className="p-4 max-w-screen bg-slate-800">
        <Items />
      </div>
    </div>
  );
};

export default Image;
