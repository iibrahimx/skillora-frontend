import { trainingHistory } from "@/data/employee-mock-data";

export default function TrainingHistoryCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Training History</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {trainingHistory.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-start justify-between gap-2"
            >
              <div className="flex items-start gap-2">
                <Icon size={14} strokeWidth={3} className="mt-0.5 text-black" />

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
          );
        })}
      </div>
    </div>
  );
}
