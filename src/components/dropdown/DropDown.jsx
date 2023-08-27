import { InputLabel, MenuItem, Select } from "@mui/material";

export const DropDown = ({ inputLabel, id, handleChange, value, items }) => {
  return (
    <>
      <InputLabel id={id + "-label"}>{inputLabel}</InputLabel>
      <Select
        labelId={id + "-label"}
        id={id}
        value={value}
        label={inputLabel}
        onChange={handleChange}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
