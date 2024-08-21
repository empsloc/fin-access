import axios from "axios"

const GetAllData=() => axios.get('/api/finance')
const DeleteData = (id:any) => axios.delete('/api/finance?id='+id)
const CreateNewData=(data:any)=>axios.post('/api/finance',data)

export default {
    GetAllData,
    DeleteData,
    CreateNewData
   
}