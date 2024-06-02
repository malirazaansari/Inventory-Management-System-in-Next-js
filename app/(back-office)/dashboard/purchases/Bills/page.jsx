import {
  HelpCircle,
  LayoutGrid,
  List,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { getData } from "@/lib/getData";
import DataTable from "@/components/dashboard/DataTable";

export default async function Bills() {
  const units = await getData("units");
  const columns = ["title", "abbreviation"];
  return (
    <div className="">
      <div className="flex justify-between items-center bg-white py-5 px-4">
        <button className="text-2xl">Bills</button>
        <div className="flex gap-4">
          {/* New */}
          <Link
            href="/dashboard/purchases/Bills/new"
            className="p-1 rounded-sm bg-blue-600 px-3 flex items-center space-x-2 text-white "
          >
            <Plus className=" w-4 h-4" />
            <span>New</span>
          </Link>
          {/* Layout */}
          <div className="flex rounded-md overflow-hidden">
            <button className="bg-gray-300 p-2 border-r border-gray-400">
              <List className="w-4 h-4" />
            </button>
            <button className="bg-gray-100 p-2 ">
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
          {/* More */}
          <button className="bg-gray-100 p-2 rounded-md">
            <MoreHorizontal className="w-4 h-4" />
          </button>
          {/* Help */}
          <button className="bg-orange-600 text-white p-2 rounded-md ">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="my-4 p-8">
        <DataTable data={units} columns={columns} resourceTitle="units" />
      </div>
    </div>
  );
}
