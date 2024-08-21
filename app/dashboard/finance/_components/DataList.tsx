'use client'
import GlobalApi from "@/app/_services/GlobalApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridReact } from "ag-grid-react";
import { Search, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AddRecord from "./AddRecord";


const DataList = ({allDataList, refreshData}:any) => {
  console.log(allDataList)
  const customButton=(props:any)=>{
    return(  <AlertDialog>
      <AlertDialogTrigger>
        <Button className="w-10 h-10 " variant="secondary" size={"sm"} >
         <div className=""> <Trash size={20} /></div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            record and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>DeleteRecord(props?.data?.id)} >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>)
  }

  const DeleteRecord=(id:any)=>{
    console.log("button pressed")
    GlobalApi.DeleteData(id).then(resp=>{
      console.log(resp)
      if(resp){
        toast('Record deleted successfully')
        refreshData()
      }
    })
}
  const [colDef, setColDef] = useState([
    { field: "customer", filter: true },
    { field: "age", filter: true },
    { field: "gender", filter: true },
    { field: "category", filter: true },
    { field: "amount", filter: true },
    { field: "action", cellRenderer: customButton },
  ]);
  const [searchInput, setSearchInput] = useState("");
  const [rowData, setRowData] = useState();
  useEffect(() => {
    allDataList && setRowData(allDataList);
  }, [allDataList]);
  return (
    <div
        className="ag-theme-alpine rounded-xl border" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        
        <div className="flex justify-between items-center p-3">
          <div className="font-medium flex  gap-2">
            
            <div className="flex  gap-2 p-2 rounded-lg border shadow-sm mb-4 max-w-sm  ">
          <Search />
          <input
            placeholder="Search..."
            type="text"
            className="w-full outline-none bg-transparent"
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
          </div>
          
          <div className="">
            <AddRecord refreshData={refreshData}/>
          </div>
        </div>
        

<AgGridReact className="p-5 rounded-xl"
          rowData={rowData}
          columnDefs={colDef}
          pagination={true}
          autoSizePadding={10}
          quickFilterText={searchInput}
          paginationPageSize={10}
          paginationPageSizeSelector={[25, 50, 100]}
        />
      
    </div>
  )
}

export default DataList