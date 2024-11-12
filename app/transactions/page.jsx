import ListColumn from "@/components/compositions/ListColumn"
import PageTitle from "@/components/widgets/PageTitle"
const Transactions = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4">
        <PageTitle title={"Your Transactions"}/>
        <ListColumn/>
    </main>
  )
}

export default Transactions