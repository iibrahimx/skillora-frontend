// import { trainingHistory } from "@/data/employee-mock-data";
// import Image from "next/image";
import { Assignment } from "@/types/assignment";

interface TrainingHistoryCardProps {
  assignments: Assignment[];
}

export default function TrainingHistoryCard({
  assignments,
}: TrainingHistoryCardProps) {
  return (
    <div className="rounded-xl max-h-[200px] xl:max-h-[190px] border border-slate-200 bg-white px-3 py-3 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Assigned Training</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="flex items-center justify-between gap-2 border-b border-black/40 pb-2 last:border-b-0"
          >
            <div className="flex items-center justify-center gap-2">
              {/* <Image
                src={item.icon}
                alt={assignment.moduleId.title}
                width={11}
                height={11}
                className="mt-0.5"
              /> */}

              <span className="text-[10px] text-black">
                {assignment.moduleId.title}
              </span>
            </div>

            <span className="text-[10px] text-black/70">
              {new Date(assignment.dueDate).toLocaleDateString()}
            </span>

            <span
              className={`text-[10px] ${
                assignment.status === "assigned"
                  ? "text-[#F59E0B]"
                  : "text-[#22C55E]"
              }`}
            >
              {assignment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
