"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function NewOrderForm() {
  const [formData, setFormData] = useState({
    what: "",
    when: "",
    where: "",
    cost: "",
  })

  return (
    <section className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">PLACE A NEW ORDER</h2>
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="what">WHAT</Label>
            <Input
              id="what"
              value={formData.what}
              onChange={(e) => setFormData({ ...formData, what: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <Label htmlFor="when">WHEN</Label>
            <Input
              id="when"
              type="datetime-local"
              value={formData.when}
              onChange={(e) => setFormData({ ...formData, when: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <Label htmlFor="where">WHERE</Label>
            <Input
              id="where"
              value={formData.where}
              onChange={(e) => setFormData({ ...formData, where: e.target.value })}
              className="bg-white"
            />
          </div>
          <div>
            <Label htmlFor="cost">COST</Label>
            <Input
              id="cost"
              type="number"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              className="bg-white"
            />
          </div>
        </div>
        <Button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white">
          PROCEED
        </Button>
      </form>
    </section>
  )
}

