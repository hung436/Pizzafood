import { useState } from "react";
import Select from "react-tailwindcss-select";

// const options = [
//   { value: "fox", label: "🦊 Fox" },
//   { value: "Butterfly", label: "🦋 Butterfly" },
//   { value: "Honeybee", label: "🐝 Honeybee" },
// ];

const MultiSelect = ({ value, handleChange, options }) => {
  //   const [animal, setAnimal] = useState(null);
  //   const handleChange = (value) => {
  //     console.log("value:", value);
  //     setAnimal(value);
  //   };
  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      isMultiple={true}
      placeholder='Chọn Size'
    />
  );
};

export default MultiSelect;
