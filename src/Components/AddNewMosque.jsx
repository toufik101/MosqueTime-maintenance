import React, { useState } from "react";

const AddNewMosque = () => {
  const [mosqueName, setMosqueName] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  // handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    // preview
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mosqueName || !file) {
      alert("Please enter mosque name and upload a picture!");
      return;
    }

    const formData = new FormData();
    formData.append("mosqueName", mosqueName);
    formData.append("file", file);

    try {
      // Send to backend API (example: /api/upload)
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Mosque added successfully!");
      } else {
        alert("Error uploading. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🕌 Add New Mosque</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Mosque Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Mosque Name</label>
          <input
            type="text"
            value={mosqueName}
            onChange={(e) => setMosqueName(e.target.value)}
            placeholder="Enter mosque name"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Upload file */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Prayer Time Schedule Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2 rounded-lg"
          />
        </div>

        {/* Preview */}
        {preview && (
          <div className="mt-3">
            <p className="font-semibold">Preview:</p>
            <img src={preview} alt="Preview" className="rounded-lg shadow-md max-h-64" />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Upload Mosque
        </button>
      </form>
    </div>
  );
};

export default AddNewMosque;
