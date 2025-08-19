import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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

  // convert file to Base64 for email
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mosqueName || !file) {
      alert("Please enter mosque name and upload a picture!");
      return;
    }

    try {
      // Convert image to Base64 string
      const base64File = await convertBase64(file);

      // Send email via EmailJS
      const result = await emailjs.send(
        "service_o1tk5qq", // replace with EmailJS Service ID
        "template_taxw6qc", // replace with EmailJS Template ID
        {
          mosqueName: mosqueName,
          mosqueImage: base64File,
          to_email: "toufikamin2000@gmail.com",
        },
        "0JePizhY9ypiYLhtO" // replace with EmailJS Public Key
      );

      if (result.status === 200) {
        alert("✅ Mosque info sent to your email!");
        setMosqueName("");
        setFile(null);
        setPreview("");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send email!");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🕌 Add New Mosque</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Mosque Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Mosque Name
          </label>
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
          <label className="block text-gray-700 font-semibold mb-1">
            Prayer Time Schedule Picture File size must be under 50KB.
          </label>
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
            <img
              src={preview}
              alt="Preview"
              className="rounded-lg shadow-md max-h-64"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Send to Email
        </button>
      </form>
    </div>
  );
};

export default AddNewMosque;
