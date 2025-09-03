import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <General />
      <div className="flex flex-col gap-8">
        <Calendar />
        <Calendar />
      </div>

      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Lines />
        <Card className="flex items-center justify-center h-[300px] text-lg font-semibold">
          Manohar
        </Card>
        <Card className="flex items-center justify-center h-[300px] text-lg font-semibold">
          Sai
        </Card>
      </div>
    </div>
  );
}
