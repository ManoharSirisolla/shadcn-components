// import { Badge } from "@/components/ui/badge"
// import Link from "next/link"



// export default function LinkAsBadge() {
//   return (
//     <Badge asChild>
//       <Link href="/">Badge</Link>
//     </Badge>
//   )
// }


// 'use client'; 

// import React from 'react';
// import { Calendar } from '@/components/ui/calendar';

// export default function Page() {
//   const [date, setDate] = React.useState<Date | undefined>(new Date());

//   return (
//     <Calendar
//       mode="single"
//       selected={date}
//       onSelect={setDate}
//     />
//   );
// }

// 'use client';

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// export default function Page() {
//   return (
//     <Accordion type="single" collapsible>
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }


// import { Checkbox } from "@/components/ui/checkbox";

// export default function page() {

//   return (
//     <div>
//       <Checkbox />
//     </div>
//   )
// }

// 'use client';

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";

// import { Button } from "@/components/ui/button"; // ✅ Don’t forget to import Button!

// export default function Page() {
//   return (
//     <Drawer>
//       <DrawerTrigger>Open</DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader>
//           <DrawerTitle>Are you absolutely sure?</DrawerTitle>
//           <DrawerDescription>This action cannot be undone.</DrawerDescription>
//         </DrawerHeader>
//         <DrawerFooter>
//           <Button>Submit</Button>
//           <DrawerClose>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// }

import { Button } from "@/components/ui/button";

export default function page() {
  return <div><Button>Click me</Button></div>
} 