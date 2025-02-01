import { Field } from "formik";
import React from "react";
import UploadImageButton from "./UploadImageButton";
import toast from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";

const SingleTermFieldItem = ({
  term,
  index,
  errors,
  touched,
  values,
  updateImagePreview,
  editMode,
  handleEditClick,
  arrayHelper,
}) => {
  return (
    <div
      key={index}
      className="w-full grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_auto] gap-4 p-4 border-2 border-gray-200 rounded-lg mb-6 items-center"
    >
      <div className="flex justify-center md:justify-start">
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-lg">
          {index + 1}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`termInfo.${index}.termName`}
          className="text-blue-600 font-medium text-lg"
        >
          {editMode[index] ? "Enter Term Name" : "Term Name (View Only)"}
        </label>
        <Field
          placeholder="Write Term Name"
          type="text"
          name={`termInfo.${index}.termName`}
          className={`w-full border-2 focus:outline-none rounded-lg px-4 py-2 text-base transition-colors ${
            errors?.[index]?.termName && touched?.[index]?.termName
              ? "border-red-500 text-red-500"
              : "border-gray-300 focus:border-blue-500 text-black"
          }`}
          readOnly={!editMode[index]}
        />
        {errors?.[index]?.termName && touched?.[index]?.termName && (
          <div className="text-red-500 text-sm mt-1">
            {errors?.[index]?.termName}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={`termInfo.${index}.termDescription`}
          className="text-blue-600 font-medium text-lg"
        >
          {editMode[index]
            ? "Enter Term Description"
            : "Term Description (View Only)"}
        </label>
        <Field
          as="textarea"
          placeholder="Write Term Description"
          name={`termInfo.${index}.termDescription`}
          rows={3}
          className={`w-full border-2 focus:outline-none rounded-lg px-4 py-2 text-base transition-colors ${
            errors?.[index]?.termDescription &&
            touched?.[index]?.termDescription
              ? "border-red-500 text-red-500"
              : "border-gray-300 focus:border-blue-500 text-black"
          }`}
          readOnly={!editMode[index]}
        />
        {errors?.[index]?.termDescription &&
          touched?.[index]?.termDescription && (
            <div className="text-red-500 text-sm mt-1">
              {errors?.[index]?.termDescription}
            </div>
          )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-blue-600 font-medium text-lg">Term Image</label>
        <UploadImageButton
          isDisabled={editMode[index]}
          values={term.termImage}
          updateImagePreview={updateImagePreview}
          index={index}
        />
      </div>

      <div className="flex flex-row gap-4 items-center justify-end md:col-start-4 md:col-span-1">
        <button
          type="button"
          onClick={() => handleEditClick(index)}
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          <MdEdit className="text-2xl" />
        </button>
        <button
          type="button"
          onClick={() =>
            values.length <= 1
              ? toast.error("Can't delete the last term")
              : arrayHelper.remove(index)
          }
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <MdDelete className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SingleTermFieldItem;
