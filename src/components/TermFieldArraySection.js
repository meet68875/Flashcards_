import { FieldArray } from "formik";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import SingleTermFieldItem from "./SingleTermFieldItem";

const TermFieldArraySection = ({
  errors,
  touched,
  values,
  updateImagePreview,
}) => {
  // Initialize editMode state to true for each term by default
  const [editMode, setEditMode] = useState([]);

  useEffect(() => {
    // Set default edit mode to true for all terms when the component is mounted
    setEditMode(new Array(values.length).fill(true)); // Set all terms to be editable by default
  }, [values.length]);

  const handleEditClick = (index) => {
    if (editMode[index]) {
      toast.success(`Edit mode disabled for Term ${index + 1}`);
    } else {
      toast.success(`Edit mode enabled for Term ${index + 1}`);
    }

    setEditMode((prevEditModes) => {
      const newEditModes = [...prevEditModes];
      newEditModes[index] = !newEditModes[index]; // Toggle edit mode
      return newEditModes;
    });
  };

  return (
    <FieldArray
      name="termInfo"
      render={(arrayHelper) => (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {values.map((term, index) => (
            <SingleTermFieldItem
              arrayHelper={arrayHelper}
              key={index}
              index={index}
              term={term}
              errors={errors}
              touched={touched}
              values={values}
              updateImagePreview={updateImagePreview}
              editMode={editMode}
              handleEditClick={handleEditClick}
            />
          ))}

          <button
            type="button"
            className="text-blue-500 font-bold hover:text-blue-700 md:text-lg"
            onClick={() =>
              arrayHelper.push({
                termName: "",
                termDescription: "",
                termImage: "",
              })
            }
          >
            Add More Terms +
          </button>
        </div>
      )}
    />
  );
};

export default TermFieldArraySection;
