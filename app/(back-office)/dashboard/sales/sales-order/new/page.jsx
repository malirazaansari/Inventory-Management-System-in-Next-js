"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewBrand({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.replace("/dashboard/sales/sales-order");
  }
  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Update request
      makePutRequest(
        setLoading,
        `api/brands/${initialData.id}`,
        data,
        "Brand",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/brands", data, "Brand", reset);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Brand" : "New Brand"}
        href="/dashboard/sales/sales-order"
      />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Brand Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Updated Brand" : "New Brand"}
        />
      </form>
      <div className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              // value={formData.customerName}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Select or add a customer"
              required
            />
          </div>
          <div>
            <label
              htmlFor="salesOrderNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Sales Order#
            </label>
            <input
              type="text"
              id="salesOrderNumber"
              name="salesOrderNumber"
              // value={formData.salesOrderNumber}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="referenceNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Reference#
            </label>
            <input
              type="text"
              id="referenceNumber"
              name="referenceNumber"
              // value={formData.referenceNumber}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="salesOrderDate"
              className="block text-sm font-medium text-gray-700"
            >
              Sales Order Date
            </label>
            <input
              type="date"
              id="salesOrderDate"
              name="salesOrderDate"
              // value={formData.salesOrderDate}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="expectedShipmentDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Shipment Date
            </label>
            <input
              type="date"
              id="expectedShipmentDate"
              name="expectedShipmentDate"
              // value={formData.expectedShipmentDate}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="paymentTerms"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Terms
            </label>
            <select
              id="paymentTerms"
              name="paymentTerms"
              // value={formData.paymentTerms}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            >
              <option>Due on Receipt</option>
              <option>Net 15</option>
              <option>Net 30</option>
              <option>Net 60</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            >
              Delivery Method
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              // value={formData.customerName}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="choose dilvery Method"
              required
            />
          </div>
          <div>
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700"
            >
              Sales Person
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              // value={formData.customerName}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Add saleperson"
              required
            />
          </div>
          <div>
            {/* <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button> */}
          </div>
        </form>
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Existing form fields */}
          {/* ... */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Item Table</h2>
            {/* {formData.items.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-7 gap-4 items-center"
              >
                <input
                  type="text"
                  name="details"
                  value={item.details}
                  onChange={(e) => handleItemChange(index, e)}
                  className="col-span-2 border-gray-300 rounded-md"
                  placeholder="Type or click to select an item"
                />
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  className="border-gray-300 rounded-md"
                  placeholder="Quantity"
                />
                <input
                  type="number"
                  name="rate"
                  value={item.rate}
                  onChange={(e) => handleItemChange(index, e)}
                  className="border-gray-300 rounded-md"
                  placeholder="Rate"
                />
                <input
                  type="number"
                  name="discount"
                  value={item.discount}
                  onChange={(e) => handleItemChange(index, e)}
                  className="border-gray-300 rounded-md"
                  placeholder="Discount"
                />
                <select
                  name="tax"
                  value={item.tax}
                  onChange={(e) => handleItemChange(index, e)}
                  className="border-gray-300 rounded-md"
                >
                  <option value="">Select a Tax</option>
                  <option value="5%">5%</option>
                  <option value="10%">10%</option>
                </select>
                <span className="block">{item.amount.toFixed(2)}</span>
                <button
                  type="button"
                  onClick={() => removeItemRow(index)}
                  className="text-red-500"
                >
                  X
                </button>
              </div>
            ))} */}
            <button
              type="button"
              // onClick={addItemRow}
              className="text-blue-500"
            >
              + Add New Row
            </button>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm font-medium text-gray-700">
                Sub Total
              </label>
              {/* <span className="block">{calculateSubTotal().toFixed(2)}</span> */}
              <label className="block text-sm font-medium text-gray-700">
                Shipping Charges
              </label>
              <input
                type="number"
                name="shippingCharges"
                // value={formData.shippingCharges}
                // onChange={handleChange}
                className="border-gray-300 rounded-md"
                placeholder="Shipping Charges"
              />
              <label className="block text-sm font-medium text-gray-700">
                Adjustment
              </label>
              <input
                type="number"
                name="adjustment"
                // value={formData.adjustment}
                // onChange={handleChange}
                className="border-gray-300 rounded-md"
                placeholder="Adjustment"
              />
              <label className="block text-sm font-medium text-gray-700">
                Total
              </label>
              {/* <span className="block">{calculateTotal().toFixed(2)}</span> */}
            </div>
          </div>
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700"
            >
              Customer Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              // value={formData.notes}
              // onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Enter any notes to be displayed in your transaction"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
