import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaQuestionCircle,
  FaBookOpen,
  FaClipboard,
 
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col">
      <div className="p-6 text-3xl font-bold">
        SkillOra
      </div>

      <nav className="flex-1">
        <ul className="space-y-2 p-4">

          <li className="flex items-center gap-3">
            <FaHome /> Dashboard
          </li>

          <li className="flex items-center gap-3">
            <FaChartBar /> Analytic Dashboard
          </li>

          <li className="flex items-center gap-3">
            <FaArrowTrendUp/> Compliance Monitoring
          </li>

          <li className="flex items-center gap-3">
            <FaUsers /> Employee Management
          </li>

          <li className="flex items-center gap-3">
            <FaClipboard /> Assignment Management
          </li>

          <li className="flex items-center gap-3">
            <FaBookOpen/> Learning Modules
          </li>

        </ul>
      </nav>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <FaCog />
          Settings
        </div>

        <div className="flex items-center gap-3">
          <FaQuestionCircle/>
          Help
        </div>

        <div className="flex items-center gap-3">
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </div>
  );
}