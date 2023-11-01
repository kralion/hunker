import React from "react";
import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import Search from "@/app/ui/search";

export const metadata: Metadata = {
  title: "Edit Invoice",
};

export default async function Page({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <h1 className="font-lusitana mb-8 text-xl md:text-2xl">Customers</h1>
      <Search placeholder="Search customers..." />
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}
