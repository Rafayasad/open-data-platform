import * as XLSX from 'xlsx'

export const getNumberOfDaysInYear = (year) => {
  return new Date(year, 1, 29).getDate() === 29 ? 366 : 365
}

export const getNumberOfDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

export const generateFile = (fileType, filename, data) => {
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.${fileType}`);
}

export const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}