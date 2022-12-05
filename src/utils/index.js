import dateFormat from "dateformat";

export function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

export const formatTime = (date) => {
  if (!date) return;
  return dateFormat(date, "dd/mm/yyyy h:MM");
};
