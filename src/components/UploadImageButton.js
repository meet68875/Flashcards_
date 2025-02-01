import { Field } from "formik";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";

const UploadImageButton = ({ values, updateImagePreview, index }) => {
  const handleImageChange = (e) => {
    const file = e.target;

    if (file.files[0]) {
      const reader = new FileReader();
      if (
        file.files[0].type === "image/png" ||
        file.files[0].type === "image/jpeg" ||
        file.files[0].type === "image/webp" ||
        file.files[0].type === "image/jpg"
      ) {
        reader.onload = (e) => {
          if (index === undefined) {
            updateImagePreview(e.target.result);
          } else {
            updateImagePreview(e.target.result, index);
          }
        };

        reader.readAsDataURL(file.files[0]);
      } else {
        toast.error("Please upload a valid image (PNG, JPEG, JPG, or WEBP).");
      }
    }
  };

  return (
    <div data-testid="test-upload-image-button">
      {values === "" ? (

        <button
          type="button"
          onClick={(e) =>
            e.target.parentElement.querySelector("input[type=file]").click()
          }
          className="flex items-center gap-2 px-4 py-2 text-blue-600 border-2 border-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
        >
          <MdOutlineUploadFile className="text-2xl" />
          <span>{index !== undefined ? "Select Image" : "Upload Image"}</span>
          {/* File input field (hidden) */}
          <Field
            className="hidden"
            type="file"
            name={
              index !== undefined
                ? `termInfo[${index}].termImage`
                : "groupInfo.groupImage"
            }
            onChange={handleImageChange}
          />
        </button>
      ) : (
        <div className="relative w-fit h-fit">
          <img
            src={values}
            alt="preview"
            className="w-40 h-40 object-cover rounded-lg border-2 border-blue-500"
          />
          <RiCloseCircleFill
            className="absolute -top-2 -right-2 text-2xl cursor-pointer text-blue-500 bg-white rounded-full hover:text-blue-600 transition-colors"
            onClick={() => {
              if (index === undefined) {
                updateImagePreview("");
              } else {
                updateImagePreview("", index);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadImageButton;