import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

export const exportToExcel_array = async (excelData, fileName) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const worksheet = XLSX.utils.aoa_to_sheet(excelData);

  const firstRowRange = XLSX.utils.decode_range(worksheet['!ref']);
  const firstRowStyle = {
    font: { bold: true }
  };
  for (let c = firstRowRange.s.c; c <= firstRowRange.e.c; ++c) {
    const address = XLSX.utils.encode_cell({ r: firstRowRange.s.r, c });
    if (!worksheet[address]) {
      worksheet[address] = { t: 's', v: '' };
    }
    worksheet[address].s = firstRowStyle;
    worksheet[address].v = worksheet[address].v.toString().toUpperCase();
  }

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};

// export const exportToExcel_list = async (excelData, fileName) => {
//     const fileType =
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//     const fileExtension = ".xlsx";
//     const worksheet = XLSX.utils.json_to_sheet(excelData);

//     const firstRowRange = XLSX.utils.decode_range(worksheet['!ref']);
//     const firstRowStyle = {
//         font: { bold: true }
//     };
//     for (let c = firstRowRange.s.c; c <= firstRowRange.e.c; ++c) {
//         const address = XLSX.utils.encode_cell({ r: firstRowRange.s.r, c });
//         if (!worksheet[address]) {
//             worksheet[address] = { t: 's', v: '' };
//         }
//         worksheet[address].s = firstRowStyle;
//         worksheet[address].v = worksheet[address].v.toString().toUpperCase();
//     }

//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     const excelBuffer = XLSX.write(workbook, {
//         bookType: "xlsx",
//         type: "array",
//     });
//     const data = new Blob([excelBuffer], { type: fileType });
//     FileSaver.saveAs(data, fileName + fileExtension);
// };


//footer in last 
export const exportToExcel_list = async (excelData, fileName, fieldsName) => {

  const filteredData = excelData.map((data) =>
    fieldsName.reduce((obj, fieldName) => {
      obj[fieldName] = data[fieldName];
      return obj;
    }, {})
  );
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const worksheet = XLSX.utils.json_to_sheet(filteredData);

  const firstRowRange = XLSX.utils.decode_range(worksheet['!ref']);
  const firstRowStyle = {
    font: { bold: true }
  };
  for (let c = firstRowRange.s.c; c <= firstRowRange.e.c; ++c) {
    const address = XLSX.utils.encode_cell({ r: firstRowRange.s.r, c });
    if (!worksheet[address]) {
      worksheet[address] = { t: 's', v: '' };
    }
    worksheet[address].s = firstRowStyle;
    worksheet[address].v = worksheet[address].v.toString().toUpperCase();
  }
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + fileExtension);
};





