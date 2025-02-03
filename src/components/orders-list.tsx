import { Card } from "@/components/ui/card"

const orders = [
  { id: 1, title: "Order #1234", status: "Processing" },
  { id: 2, title: "Order #1235", status: "Completed" },
  { id: 3, title: "Order #1236", status: "Pending" },
]

export default function OrdersList() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">YOUR ORDERS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {orders.map((order) => (
          <Card key={order.id} className="p-4 hover:shadow-lg transition-shadow">
            <h3 className="font-medium">{order.title}</h3>
            <p className="text-sm text-muted-foreground">{order.status}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

