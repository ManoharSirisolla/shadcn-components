"use client";

import {
  Bell,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandList,
} from "./Command";
import { CommandItem } from "./ui/command";
import UserItem from "./UserItem";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        { link: "/", icon: <User className="w-4 h-4" />, text: "Profile" },
        { link: "/", icon: <Inbox className="w-4 h-4" />, text: "Inbox" },
        { link: "/", icon: <CreditCard className="w-4 h-4" />, text: "Billing" },
        { link: "/", icon: <Bell className="w-4 h-4" />, text: "Notifications" },
      ],
    },
    {
      group: "Settings",
      items: [
        { link: "/", icon: <Settings className="w-4 h-4" />, text: "General Settings" },
        { link: "/", icon: <Cookie className="w-4 h-4" />, text: "Privacy" },
        { link: "/", icon: <MessageSquare className="w-4 h-4" />, text: "Logs" },
      ],
    },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-4 w-[280px] border-r min-h-screen p-4">
      {/* User info */}
      <div>
        <UserItem />
      </div>

      {/* Menu */}
      <div className="grow">
        <Command className="overflow-visible">
          <CommandList className="overflow-visible">
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <CommandItem
                    key={optionKey}
                    className="flex gap-2 cursor-pointer"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500">Settings / Notifications</div>
    </aside>
  );
}
