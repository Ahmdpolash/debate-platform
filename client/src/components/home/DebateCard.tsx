import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Users, MessageSquare } from "lucide-react"; // Importing relevant icons

const DebateCard = ({ debate, index }: { debate: any; index: number }) => {
  return (
    <div key={debate.id}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <div>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              debate.status === "সক্রিয়"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {debate.status}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
            {debate.title}
          </h3>
          <p className="text-gray-600 text-base line-clamp-3">
            {debate.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {debate.tags.map((tag: any) => (
              <span
                key={tag}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 pt-4 text-gray-700 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center mb-2">
              <Users className="h-4 w-4 mr-2 text-purple-500" />
              <span>{debate.participants} জন অংশগ্রহণকারী</span>
            </div>
            <div className="flex items-center mb-2">
              <MessageSquare className="h-4 w-4 mr-2 text-blue-500" />
              <span>{debate.arguments}টি যুক্তি</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-yellow-500" />
            <span>
              {debate.status === "সক্রিয়"
                ? `বাকি: ${debate.timeRemaining}`
                : `ফলাফল: ${debate.winner}`}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <Button asChild className="w-full text-lg">
            <Link href={`/debates/${debate.id}`}>
              {debate.status === "সক্রিয়" ? "ডিবেটসে যোগ দিন" : "ডিবেটস দেখুন"}
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default DebateCard;
