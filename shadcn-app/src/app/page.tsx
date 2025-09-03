import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="h-[400px] p-4 flex flex-col gap-4">
  <Card className="flex-1">
    <CardContent>
      <General />
    </CardContent>
  </Card>

  <Card className="flex-1">
    <CardContent>
      <Calendar />
      <Calendar />
    </CardContent>
  </Card>




  
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
