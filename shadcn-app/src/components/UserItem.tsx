"use client";

export default function UserItem() {
  return (
    <div className="flex items-center gap-3 border rounded-full px-3 py-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white font-bold">
        MS
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold leading-tight">Manohar</p>
        <p className="text-xs text-muted-foreground">Lets Code</p>
      </div>
    </div>
  );
}