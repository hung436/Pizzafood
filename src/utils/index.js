import dateFormat from "dateformat";

export function getObjKey(obj, value) {
  return Object.keys(obj).find((key) => obj[key] === value);
}

export const formatTime = (date) => {
  if (!date) return;
  return dateFormat(date, "dd/mm/yyyy h:MM");
};
export const getStatus = (status) => {
  let text = "";
  switch (status) {
    case 1:
      text = "Chờ xác nhận";
      break;
    case 2:
      text = "Đang vận chuyển";
      break;
    case 3:
      text = "Hoàn tất";
      break;
    case 0:
      text = "Hủy";
      break;
    default:
      text = "Chờ xác nhận";
      break;
  }
  return text;
};
