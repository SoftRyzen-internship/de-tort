// "use client";

// import React, { useState } from "react";
// import { FieldValues } from "react-hook-form";
// import { FormControl } from "@/components/ui/form";
// import { date } from "zod";

// interface ToppingControlProps {
//   field: FieldValues;
// }

// const ToppingControl: React.FC<ToppingControlProps> = ({ field }) => {

//   return (
//     <FormControl>
//         <button onClick={handleOpen}>
//           {field.value ? field.value : <span>Обрати начинку</span>}
//         </button>
//       </FormControl>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ToppingsModal
//           onClose={onClose}
//           onSelectTopping={(title) => {
//             setSelectedTopping(title);
//             field.onChange(date);
//           }}
//         />
//       </Modal>
//   );
// };

// export default ToppingControl;
