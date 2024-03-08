import { AccountTable } from "@/components/Tables/AccountTable/AccountTable"

export default async function AccountsPage() {
  const response = await fetch(`${process.env.API_URL}/accounts`)
  const { data: { accounts } } = await response.json()
  return (
    <div className='flex flex-col gap-4 p-8'>
      <h1 className='my-4 text-4xl font-bold'>Mis cuentas</h1>
      <AccountTable data={accounts}/>
    </div>
  )
}
