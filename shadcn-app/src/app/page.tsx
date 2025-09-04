import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4 h-[400px]">
  <Card className="flex-1">
    <CardContent>
      <General />
    </CardContent>
  </Card>
  <div className="flex flex-col flex-1 gap-4">
    <Card className="flex-1">
      <CardContent>
        <Calendar />
        <Calendar />
      </CardContent>
    </Card>
  </div>





  
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      <Lines />
  <Card className="flex items-center justify-center text-lg font-semibold">
    Manohar
  </Card>
  <Card className="flex items-center justify-center text-lg font-semibold">
    Sai
  </Card>
  </div>
  </div>
  );
}
