import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentForm from "../Pages/StudentForm";
import StudentList from "../Pages/StudentList";
import StaffList from "../Pages/StaffList"
import StaffForm from "../Pages/StaffForm"
import StaffDetail from "../Pages/StaffDetail"
import StaffConfirmDelete from "../Pages/StaffConfirmDelete"
import ReceiptForm from "../Pages/ReceiptForm"
import InvoiceConfirmDelete from "../Pages/InvoiceConfirmDelete"
import InvoiceDetail from "../Pages/InvoiceDetail"
import InvoiceForm from "../Pages/InvoiceForm"
import InvoiceList from "../Pages/InvoiceList"
import CreateResult from "../Pages/CreateResult"
import AllResults from "../Pages/AllResults"
import EditResults from "../Pages/EditResults"
import BulkInvoice from "../Pages/BulkInvoice"
import SubjectList from "../Pages/SubjectList";
import StudentAdd from "../Pages/StudentAdd";
import TeacherList from "../Pages/TeacherList";

const Routers = () => {
  return (
    
    <Routes>
    
      <Route path="/" element={<StudentList/>} />
      <Route path="/StudentList" element={<StudentList />} />
      <Route path="/StudentForm" element={<StudentForm/> }/>
      <Route path="/StaffList" element={<StaffList/> } />
      <Route path="/StaffForm" element={<StaffForm/> } />
      <Route path="/StaffDetail" element={<StaffDetail/> } />
      <Route path="/StaffConfirmDelete" element={<StaffConfirmDelete/> } />
      <Route path="/ReceiptForm" element={<ReceiptForm/> } />
      <Route path="/ReceiptForm" element={<InvoiceList/> } />
      <Route path="/ReceiptForm" element={<InvoiceForm/> } />
      <Route path="/ReceiptForm" element={<InvoiceDetail/> } />
      <Route path="/InvoiceConfirmDelete" element={<InvoiceConfirmDelete/> } />
      <Route path="/CreateResult" element={<CreateResult/> } />
      <Route path="/AllResults" element={<AllResults/> } />
      <Route path="/EditResults" element={<EditResults/> } />
      <Route path="/BulkInvoice" element={<BulkInvoice/> } />
      <Route path="/SubjectList" element={<SubjectList/>} />
      <Route path="/StudentAdd" element={<StudentAdd />} />
      <Route path="/TeacherList" element={<TeacherList />} />

     


     

    </Routes>
  );
};

export default Routers;