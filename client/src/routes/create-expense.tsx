import { createFileRoute } from '@tanstack/react-router'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute('/create-expense')({
  component: CreateExpense,
})

function CreateExpense() {
  return <div className="p-2">
    <h2>Create new expense</h2> 
    <form>
      <Label htmlFor="title">Title</Label>
      <Input id="title" type="text" placeholder="Title" />
      <Label htmlFor="amount">Amount</Label>
      <Input id="amount" type="number" placeholder="Amount" />
      <button type="submit">Create Expense</button>
    </form>
  </div>
}
