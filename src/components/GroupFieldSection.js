import { Field } from "formik";
import React from "react";
import UploadImageButton from "./UploadImageButton";

const GroupFieldSection = ({ errors, touched, values, updateImagePreview }) => {
  return (
    <div className="min-h-[45vh] p-6 bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Group Name Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="groupInfo.groupName"
            className="text-blue-600 font-medium text-lg"
          >
            Enter Group Name
          </label>
          <Field
            placeholder="Write Group Name"
            type="text"
            name="groupInfo.groupName"
            className={`w-full border-2 focus:outline-none rounded-lg px-4 py-2 text-base transition-colors ${
              errors?.groupName && touched?.groupName
                ? "border-red-500 text-red-500"
                : "border-gray-300 focus:border-blue-500 text-black"
            }`}
          />
          {errors?.groupName && touched?.groupName && (
            <div className="text-red-500 text-sm mt-1">{errors.groupName}</div>
          )}
        </div>

        {/* Upload Group Image */}
        <div className="flex flex-col gap-2 items-center">
          <label className="text-blue-600 font-medium text-lg">
            Upload Group Image
          </label>
          <UploadImageButton
            values={values.groupImage}
            updateImagePreview={updateImagePreview}
          />
        </div>
      </div>

      {/* Group Description Field */}
      <div className="mt-6 flex flex-col gap-2">
        <label
          htmlFor="groupInfo.groupDescription"
          className="text-blue-600 font-medium text-lg"
        >
          Enter Group Description
        </label>
        <Field
          as="textarea"
          placeholder="Write Group Description"
          name="groupInfo.groupDescription"
          rows={4}
          className={`w-full border-2 focus:outline-none rounded-lg px-4 py-2 text-base transition-colors ${
            errors?.groupDescription && touched?.groupDescription
              ? "border-red-500 text-red-500"
              : "border-gray-300 focus:border-blue-500 text-black"
          }`}
        />
        {errors?.groupDescription && touched?.groupDescription && (
          <div className="text-red-500 text-sm mt-1">
            {errors.groupDescription}
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupFieldSection;


