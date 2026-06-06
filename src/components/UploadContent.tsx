import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaVideo,
  FaLink,
} from "react-icons/fa";

export default function UploadContent() {
  return (
    <div className="bg-white border border-gray-400 rounded-2xl p-4 shadow-sm h-[500px] flex flex-col">

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-semibold">
          1
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Upload Content
          </h2>

          <p className="text-gray-500 text-sm">
            Add content to build your module.
          </p>
        </div>
      </div>

      {/* Upload Area */}
      <div className="mt-4 border-2 border-dashed border-gray-500 rounded-xl h-56 flex flex-col justify-center items-center">

        <FaCloudUploadAlt
          size={50}
          className="text-black"
        />

        <p className="font-semibold mt-3">
          Drag or Drop files here
        </p>

        <span className="text-gray-500 text-sm">
          or
        </span>

        <button className="mt-2 text-blue-600 text-sm font-medium">
          Browse Files
        </button>

      </div>

      {/* File Buttons */}
      <div className="grid grid-cols-4 gap-3 mt-8">

        <button className="border rounded-xl py-3 flex flex-col items-center shadow-sm hover:bg-gray-50">

          <FaFilePdf
            className="text-red-500"
            size={22}
          />

          <span className="text-xs mt-1">
            Upload PDF
          </span>

        </button>

        <button className="border rounded-xl py-3 flex flex-col items-center shadow-sm hover:bg-gray-50">

          <FaVideo
            size={22}
          />

          <span className="text-xs mt-1">
            Upload Video
          </span>

        </button>

        <button className="border rounded-xl py-3 flex flex-col items-center shadow-sm hover:bg-gray-50">

          <div className="w-4 h-4 bg-pink-500 text-white text-xs rounded flex items-center justify-center">
            S
          </div>

          <span className="text-xs mt-3">
            Upload Slides
          </span>

        </button>

        <button className="border rounded-xl py-3 flex flex-col items-center shadow-sm hover:bg-gray-50">

          <FaLink
            size={22}
          />

          <span className="text-xs mt-1">
            Upload Link
          </span>

        </button>

      </div>

      {/* Footer Text */}
      <div className="flex justify-between text-xs text-gray-500 mt-10">
        <span>
          Supports PDF, PPTX, DOCX, MP4, MOV and more
        </span>

        <span>
          Max file size: 500MB
        </span>
      </div>

    </div>
  );
}