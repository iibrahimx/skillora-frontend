import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
        <div>
  <div className="flex items-center gap-3">
    <div className="flex flex-col gap-1">
      <div className="w-6 h-0.5 bg-black rounded"></div>
      <div className="w-6 h-0.5 bg-black rounded"></div>
      <div className="w-4 h-0.5 bg-black rounded"></div>
    </div>

    <h1 className="text-4xl font-bold">
      Learning Modules
    </h1>
  </div>

  <p className="text-gray-400 mt-2">
    Create, manage, and publish engaging learning experiences
  </p>
</div>

      <div className="flex items-center gap-4">

        <div className="flex items-center border rounded-lg px-3 py-1 bg-white">
          <FaSearch />
          <input
            className="ml-2 outline-none"
            placeholder="Search..."
          />
        </div>

        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
        />
        <div>
         <p className="font-bold">
           John Peace
        </p>

        <p className="text-xs text-gray-500">
         Admin
        </p>
        </div>
      </div>
      
    </div>
  );
}