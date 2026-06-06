export default function TrainingSummary() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-xl font-bold">
        Training Summary
      </h2>

      <div className="space-y-4 mt-4">

        <div className="flex justify-between">
          <span>Module Content</span>
          <span>3 files</span>
        </div>

        <div className="flex justify-between">
          <span>Quiz Questions</span>
          <span>20</span>
        </div>

        <div className="flex justify-between">
          <span>Duration</span>
          <span>45 mins</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span>Draft</span>
        </div>

      </div>

    </div>
  );
}