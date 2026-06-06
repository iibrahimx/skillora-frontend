import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UploadContent from "../components/UploadContent";
import QuizGenerator from "../components/QuizGenerator";
import ReflectionPrompts from "../components/ReflectionPrompts";
import PublishTraining from "../components/PublishTraining";


export default function LearningModules() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Header />

        <div className="h-px bg-gray-300 my-1"></div>

      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-4 mt-6">
          <UploadContent />
          <QuizGenerator />
          <ReflectionPrompts />
        </div>

        <div className="">
          <div className="col-span-3">
            <PublishTraining />
          </div>

          </div>
      </div>
    </div>
    </div>
  );
}