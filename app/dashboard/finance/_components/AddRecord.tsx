"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
type Inputs = {
  step:number,
  customer:string,
  age:string,
  gender:string,
  zipcodeOri:string,
  merchant:string,
  zipMerchant:string,
  category:string,
  amount:number,
  fraud:number

};

function AddRecord({refreshData}:any) {
  const [open, setOpen] = useState(false);

  const [loading,setLoading]= useState(false)
  const onSubmit = (data: any) => {
    GlobalApi.CreateNewData(data).then((res) => {
     setLoading(true)
      if(res.data){
        reset()
        refreshData()
        setOpen(false)
        toast('Record Added')
      }
      setLoading(false)
      
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();



  return (
    <div>
      <Button onClick={() => setOpen(true)}>+ Add New Record</Button>
      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Record</DialogTitle>
            <DialogDescription>
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-5">
                <div className="">
                <div className="py-3 gap-2 flex flex-col">
                  <label>Step</label>
                  <Input
                    placeholder="e.g Step"
                    type="number"
                    {...register("step", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Customer</label>
                  <Input
                    placeholder="e.g Customer"
                    {...register("customer", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Age</label>
                  <Input
                    placeholder="e.g Age"
                    {...register("age", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Gender</label>
                  <Input
                    placeholder="e.g Gender"
                    {...register("gender", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Zip Code Ori</label>
                  <Input
                    placeholder="e.g Zip Code Ori"
                    {...register("zipcodeOri", { required: true })}
                  />
                </div>
                </div>
                <div className="">
                <div className="py-3 gap-2 flex flex-col">
                  <label>Merchant</label>
                  <Input
                    placeholder="e.g Merchant"
                    {...register("merchant", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>zipMerchant</label>
                  <Input
                    placeholder="e.g Zip Merchant"
                    {...register("zipMerchant", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Category</label>
                  <Input
                    placeholder="e.g Category"
                    {...register("category", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Amount</label>
                  <Input
                  type="number"
                    placeholder="e.g Amount"
                    {...register("amount", { required: true })}
                  />
                </div>
                <div className="py-3 gap-2 flex flex-col">
                  <label>Fraud</label>
                  <Input
                  type="number"
                    placeholder="e.g Fraud"
                    {...register("fraud", { required: true })}
                  />
                </div>
                </div>
                </div>
               
                <div className="flex justify-end gap-3">
                  <Button type="button" variant={"ghost"} onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button disabled={loading} type="submit">{loading?<LoaderIcon className="animate-spin"/>: "Save"}</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddRecord;
