// "use client";

// import React, { useState } from "react";
// import { FieldValues } from "react-hook-form";
// import { FormControl } from "@/components/ui/form";
// import { cn } from "@/utils/helpers";

// interface ToppingControlProps {
//   field: FieldValues;
// }

// const ToppingControl: React.FC<ToppingControlProps> = ({ field }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = (field) => {
//     setIsOpen(false);
//     field.onChange("шоколад-ягода");
//   };
//   const handleOpen = () => {
//     setIsOpen(true);
//   };

//   return (
//     <>
//       <FormControl>
//         <button
//           onClick={handleOpen}
//           className={cn("w-[240px]", !field.value && "text-gray-400")}
//         >
//           {field.value ? field.value : <span>Обрати начинку</span>}
//         </button>
//       </FormControl>

//       <div
//         className={cn(
//           {
//             "opacity-0": !isOpen,
//           },
//           {
//             "z-50 p-10 fixed top-10 left-10 right-10 bottom-10 w-full h-full bg-red-300":
//               isOpen,
//           }
//         )}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
//           necessitatibus eius ut nesciunt minus, pariatur asperiores suscipit,
//           eveniet laboriosam molestias nemo saepe impedit aut provident error?
//           Fuga dolore voluptatum tenetur.
//         </p>
//         <button onClick={() => handleClose(field)} className="p-5 bg-blue-300">
//           close
//         </button>
//       </div>
//     </>
//   );
// };

// export default ToppingControl;
