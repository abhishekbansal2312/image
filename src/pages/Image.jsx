import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Poster from "../components/Poster";
import Modal from "../components/Modal";
import Items from "../components/Items";
import { toast } from "react-hot-toast";

const Image = () => {
  const [ImagesData, setImagesData] = useState([]);
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === -1 && ImagesData.length >= 4) {
      toast.error("You can't add more than 4 items!");
      return;
    }
    const updatedForm = {
      ...form,
      error: !form.ready,
    };

    let newImageData;

    if (editIndex === -1) {
      newImageData = [...ImagesData, updatedForm];
      toast.success("Item added successfully!");
    } else {
      newImageData = ImagesData.map((item, index) =>
        index === editIndex ? updatedForm : item
      );
      toast.success("Item updated successfully!");
    }

    setImagesData(newImageData);
    localStorage.setItem("items", JSON.stringify(newImageData));
    setForm({ url: "", ready: false, error: true });
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
    toast.error("Item removed successfully!");
  };

  return (
    <div className="container w-full p-4">
      <div className="flex justify-center mb-2">
        <div className="p-4 rounded-lg w-full ">
          <Poster ImagesData={ImagesData} count={ImagesData.length} />
        </div>
      </div>

      <div className="flex ml-4 ">
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
          <Form
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
