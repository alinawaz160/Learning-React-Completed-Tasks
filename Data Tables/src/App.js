import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FormComponent from './formComponent';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import Delete from '@material-ui/icons/Delete';

const initialData = [
  { 
    name: "Raja",
    company: "Test Corp1",
    city: "Denmark",
    state: "NY"
  },
  {
    name: "Joe James2",
    company: "Test Corp2",
    city: "Karachi",
    state: "NS"
  },
  {
    id:2,
    name: "Joe James3",
    company: "Test Corp3",
    city: "Lahore",
    state: "NA"
  }
];
const columns = [
  {
    label: "Name",
    name: "name"
  },
  {
    label: "Company",
    name: "company"
  },
  {
    label: "City",
    name: "city"
  },
  {
    label: "State",
    name: "state"
  },
  {
    label: "View",
    name: "options"
  },
  {
    label: "Delete",
    name: "delete"
  }
];
export default function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState({});
  
  const options = {
    download: false,
    print: false,
    selectableRowsHideCheckboxes: true,
    search: false,
    viewColumns: false,
    filter: false,
    customToolbar: () => (<IconButton
      variant="outlined"
      onClick={() => {
        setOpen(true)
      }
      }
    >
      <AddCircleOutlineRoundedIcon></AddCircleOutlineRoundedIcon>
    </IconButton>),
  };
  useEffect(() => {
    let tempData = [];
    let id = 0;
    initialData.map((d) => {
      id++;
      
      let i = id;
      // data.push({d,i})
      // console.log({
      //   id,
      //   index
      // });
      tempData.push({
        ...d,
        id: i,       
        options: (
          <IconButton
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }
            }
          >
            <VisibilityIcon></VisibilityIcon>
          </IconButton>
        ),
        delete: (
          <IconButton
            variant="outlined"
            onClick={() => { 
              return Delete(i);
              //   function Delete(id){
              //   console.log("Data",data);
              //   // let tempData = [...data]; 
              //   // tempData = tempData.filter(i => i.id === id);
              //   // setData(tempData);
              // } 
              
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>
        ),
      });
    });

    setData([...tempData]);
  }, [])
  const handleClose = () => {
    setOpen(false);
  };
  const Delete = (id) => {
    console.log("Data",data);
    let tempData = [...data]; 
    tempData = tempData.filter(i => i.id === id);
    setData(tempData);
  }
  return (
    <div >
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="rowDataHeading"
      >
        <DialogContent>
          <FormComponent
            formValues={formValues}
            setData={
              (row) => {
                let tempData = [...data,row];
                setData(tempData);
              }
            } 
            setOpen={setOpen}
            setFormValues={setFormValues} />
        </DialogContent>
      </Dialog>
    </div>
  );
}