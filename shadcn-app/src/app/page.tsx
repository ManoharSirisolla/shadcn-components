import Calendar from "@/components/Calendar/Calendar";
import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";

export default function page() {
  return <div className="grid gap-[32px]">
    <div className="grid grid-cols-2 gap-[32px]">
   <General />
   <div className="grid gap-[32px]">
      <Calendar />
      <Calendar />
   </div>
   <div className="grid grid-cols-3 gap-[32px]">
        <Card className="h-[300px]">Hello</Card>
        <Card className="h-[300px]">Manohar</Card>
        <Card className="h-[300px]">Sai</Card>
   </div>
    </div>
  </div>
} 