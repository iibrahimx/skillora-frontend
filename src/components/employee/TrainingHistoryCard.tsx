import { trainingHistory } from "@/data/employee-mock-data";
import Image from "next/image";

export default function TrainingHistoryCard() {
  return (
    <div className="rounded-xl max-h-[200px] xl:max-h-[190px] border border-slate-200 bg-white px-3 py-3 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Training History</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {trainingHistory.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-2">
            <div className="flex items-center justify-center gap-2">
              <Image
                src={item.icon}
                alt={item.title}
                width={11}
                height={11}
                className="mt-0.5"
              />

              <span className="text-[10px] text-black">{item.title}</span>
            </div>

            <span className="text-[10px] text-black/70">{item.date}</span>

            <span
              className="text-[10px] font-normal"
              style={{
                color: item.color,
              }}
            >
              {item.completionRate}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
