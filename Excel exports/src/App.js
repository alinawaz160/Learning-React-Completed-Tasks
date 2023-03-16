import { exportToExcel_list, exportToExcel_array } from './excelexport';
const ExcelExport2D = [
  ["Product No", "Product Name", "Product Size", "Product Company", "Product Details"],
  ["1", "Car", "large", "coc", "bottle"],
  ["2", "Fruit", "medium", "coc", "bottle"],
  ["3", "Beverages", "small", "coc", "bottle"],
  ["4", "vegtables", "x-large", "coc", "bottle"]
]

const ExcelExportList = [
  { ProductNo: "1", ProductName: "Car is a second item", ProductSize: "large", ProductCompany: "coc" , Productbarcode:"A943242"},
  {ProductNo: "2", ProductName: "Fruit", ProductSize: "medium",ProductCompany: "coc" , Productbarcode:"A943242"},
  { ProductNo: "3", ProductName: "Beverages", ProductSize: "small", ProductCompany: "coc" , Productbarcode:"A943242"},
  { ProductNo: "4", ProductName: "vegtables", ProductSize: "x-large", ProductCompany: "coc" , Productbarcode:"A943242" }
]
let fieldsName = ["ProductNo","ProductName","ProductSize","ProductCompany"]
const handleExport_List = async () => {
  const footerValues = {
    totalDebit: 120,
    totalCredit: 130,
    balance: 200,
  };
  await exportToExcel_list(ExcelExportList, "List2 Type",fieldsName );
}
const handleExport_Array = async () => {
  await exportToExcel_array(ExcelExport2D, "Array Type");
}
function App() {
  return (
    <div>
      <h1>Excel Export List Passage</h1>
      <button onClick={handleExport_List}>Export List</button>
      <h1>Excel Export Array Passage</h1>
      <button onClick={handleExport_Array}>Export Array</button>
    </div>
  );
}

export default App;
