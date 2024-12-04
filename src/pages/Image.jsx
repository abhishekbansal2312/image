import React, { useState, useEffect } from "react";
import AddItem from "../components/AddItem";
import Poster from "../components/Poster";
import Modal from "../components/Modal";
import Items from "../components/Items";
import { toast } from "react-hot-toast"; // Import toast

const Image = () => {
  const [ImagesData, setImagesData] = useState([]);
  const [form, setForm] = useState({
    url: "",
    ready: false,
  });
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setImagesData(JSON.parse(storedItems));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newImageData;

    if (editIndex === -1) {
      newImageData = [...ImagesData, form];
      toast.success("Item added successfully!"); // Toast on adding item
    } else {
      newImageData = ImagesData.map((item, index) =>
        index === editIndex ? form : item
      );
      toast.success("Item updated successfully!"); // Toast on editing item
    }

    setImagesData(newImageData);
    localStorage.setItem("items", JSON.stringify(newImageData));
    setForm({ url: "", ready: false });
    setShowModal(false);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(ImagesData[index]);
    setShowModal(true);
  };

  const handleRemove = (index) => {
    const newImageData = ImagesData.filter((_, i) => i !== index);
    setImagesData(newImageData);
    localStorage.setItem("items", JSON.stringify(newImageData));
    toast.error("Item removed successfully!"); // Toast on removing item
  };

  return (
    <div className="container min-h-screen p-4">
      <div className="flex justify-center mb-8">
        <div className="p-4 rounded-lg w-full max-w-2xl">
          <Poster />
        </div>
      </div>

      <div className="flex mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => setShowModal(true)}
        >
          Add Item
        </button>
      </div>

      <div className="p-4 rounded-lg">
        <Items
          imagesData={ImagesData}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
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
    </div>
  );
};

export default Image;
