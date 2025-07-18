import { Button } from "@/components/ui/button";
import { Link, Plus } from "lucide-react";
import React from "react";

const DebateBtn = () => {
  return (
    <div>
      <Button asChild size="sm" className={""}>
        <Link href="/debates/create">
          <Plus className="h-5 w-4 mr-1 p" />
          ডিবেট তৈরি করুন
        </Link>
      </Button>
    </div>
  );
};

export default DebateBtn;
