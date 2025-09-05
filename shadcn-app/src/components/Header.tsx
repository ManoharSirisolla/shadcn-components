"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notifications] = useState<any>([
    {
      text: "This is another Notification",
      date: "02-09-2025",
      read: true,
    },
    {
      text: "This is a Notification",
      date: "02-09-2025",
      read: false,
    },
  ]);

  const hasUnread = notifications.some((n: any) => !n.read);

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <CommandDemo />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative" variant="outline" size="icon">
            <div
              className={`absolute -top-1 right-0 h-3 w-3 rounded-full ${
                hasUnread ? "bg-green-500" : "bg-neutral-300"
              }`}
            ></div>
            <BellIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {notifications.length === 0 ? (
            <DropdownMenuItem className="text-sm text-neutral-500">
              No notifications
            </DropdownMenuItem>
          ) : (
            notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full mt-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-300"
                  }`}
                ></div>
                <div>
                  <p className="text-sm">{item.text}</p>
                  <p className="text-xs text-neutral-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
