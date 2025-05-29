import { createFileRoute } from '@tanstack/react-router'
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";


export const Route = createFileRoute('/expenses')({
  component: Expenses,
})

async function getAllExpenses() {
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("Server error.");
  }
  const data = await res.json();
  return data;
}

function Expenses() {
  const { isPending, error, data } = useQuery({
    queryKey: ['get-all-expenses'],
    queryFn: getAllExpenses
  })

  if (error) return "An error has occured: " + error.message

  return (
    <Table className='m-auto w-[600px]'>
      <TableCaption>A list of all expenses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isPending ?
          Array(3).fill(0).map((_, i) => (
            <TableRow key={i}>
              <TableCell>
                <Skeleton className="h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4" />
              </TableCell>
            </TableRow>
          ))
          :  data?.expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.id}</TableCell>
            <TableCell>{expense.title}</TableCell>
            <TableCell>{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

