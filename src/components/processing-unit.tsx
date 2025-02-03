"use client"

import OrdersList from "./orders-list"
import NewOrderForm from "./new-order-form"
import UserInformation from "./user-information"

export default function ProcessingUnit() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <OrdersList />
          <NewOrderForm />
        </div>
        <div className="lg:col-span-1 lg:row-span-2">
          <UserInformation />
        </div>
      </div>
    </div>
  )
}

