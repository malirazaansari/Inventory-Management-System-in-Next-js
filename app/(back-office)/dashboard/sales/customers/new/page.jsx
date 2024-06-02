// "use client";
// // pages/new-customer.js
// import { useState } from "react";

// const NewCustomer = () => {
//   const [customerType, setCustomerType] = useState("Individual");
//   const [formData, setFormData] = useState({
//     salutation: "",
//     firstName: "",
//     lastName: "",
//     companyName: "",
//     displayName: "",
//     email: "",
//     phone: "",
//     phoneType: "work",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to backend
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">New Customer</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex items-center space-x-4">
//           <label className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="customerType"
//               value="Business"
//               checked={customerType === "Business"}
//               onChange={() => setCustomerType("Business")}
//               className="form-radio"
//             />
//             <span>Business</span>
//           </label>
//           <label className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="customerType"
//               value="Individual"
//               checked={customerType === "Individual"}
//               onChange={() => setCustomerType("Individual")}
//               className="form-radio"
//             />
//             <span>Individual</span>
//           </label>
//         </div>
//         <div className="space-y-2">
//           <label className="block">
//             <span className="text-gray-700">Primary Contact</span>
//             <div className="flex space-x-4 mt-1">
//               <select
//                 name="salutation"
//                 value={formData.salutation}
//                 onChange={handleInputChange}
//                 className="form-select flex-shrink-0"
//               >
//                 <option value="">Salutation</option>
//                 <option value="Mr.">Mr.</option>
//                 <option value="Ms.">Ms.</option>
//                 <option value="Mrs.">Mrs.</option>
//               </select>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 className="form-input flex-grow"
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 className="form-input flex-grow"
//               />
//             </div>
//           </label>
//         </div>
//         {customerType === "Business" && (
//           <div className="space-y-2">
//             <label className="block">
//               <span className="text-gray-700">Company Name</span>
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Name"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 className="form-input w-full mt-1"
//               />
//             </label>
//           </div>
//         )}
//         <div className="space-y-2">
//           <label className="block">
//             <span className="text-gray-700">Customer Display Name</span>
//             <input
//               type="text"
//               name="displayName"
//               placeholder="Customer Display Name"
//               value={formData.displayName}
//               onChange={handleInputChange}
//               required
//               className="form-input w-full mt-1"
//             />
//           </label>
//         </div>
//         <div className="space-y-2">
//           <label className="block">
//             <span className="text-gray-700">Customer Email</span>
//             <input
//               type="email"
//               name="email"
//               placeholder="Customer Email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="form-input w-full mt-1"
//             />
//           </label>
//         </div>
//         <div className="space-y-2">
//           <label className="block">
//             <span className="text-gray-700">Customer Phone</span>
//             <div className="flex space-x-4 mt-1">
//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Customer Phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="form-input flex-grow"
//               />
//               <div className="flex items-center space-x-2">
//                 <label className="flex items-center space-x-1">
//                   <input
//                     type="radio"
//                     name="phoneType"
//                     value="work"
//                     checked={formData.phoneType === "work"}
//                     onChange={() =>
//                       setFormData({ ...formData, phoneType: "work" })
//                     }
//                     className="form-radio"
//                   />
//                   <span>Work</span>
//                 </label>
//                 <label className="flex items-center space-x-1">
//                   <input
//                     type="radio"
//                     name="phoneType"
//                     value="mobile"
//                     checked={formData.phoneType === "mobile"}
//                     onChange={() =>
//                       setFormData({ ...formData, phoneType: "mobile" })
//                     }
//                     className="form-radio"
//                   />
//                   <span>Mobile</span>
//                 </label>
//               </div>
//             </div>
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewCustomer;

"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSupplier({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const selectOptions = [
    {
      label: "Main",
      value: "main",
    },
    {
      label: "Branch",
      value: "branch",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/suppliers");
  }
  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/suppliers/${initialData.id}`,
        data,
        "Supplier",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/suppliers", data, "Supplier", reset);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Supplier" : "New Supplier"}
        href="/dashboard/inventory/suppliers"
      />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Suppliers Name"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Phone"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Email"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Address"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier Code"
            name="supplierCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Supplier TIN"
            name="taxID"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Supplier Payment terms"
            name="paymentTerms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Updated Supplier" : "New Supplier"}
        />
      </form>
    </div>
  );
}
