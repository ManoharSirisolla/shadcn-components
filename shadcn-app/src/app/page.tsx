import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TablesDemo } from "@/components/Cards/Tables";

export default function Page() {
  return (
   <div className="grid gap-8 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-auto lg:h-[400px]">
        <div className="p-4 h-[400px]">
          <General />
        </div>
        <div className="grid grid-rows-2 gap-4 h-[400px]">
          <div className="p-4">
            <Calendar />
          </div>
          <div className="p-4">
            <Calendar />
          </div>
        </div>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div className="flex flex-col border p-4 h-full">
        <Lines />
      </div>
      <div className="flex flex-col border p-4 h-full">
        <TablesDemo  />
      </div>
      <div className="flex flex-col border p-4 h-full">
        <DataTableDemo />
      </div>
    </div>
    </div>
  );
}