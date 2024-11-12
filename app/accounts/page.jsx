import ListColumn from "@/components/compositions/ListColumn"
import Banner from "@/components/widgets/Banner"
import PageTitle from "@/components/widgets/PageTitle"

const Accounts = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4 mt-16">
        <Banner/>
        <PageTitle title={"Your Savings and Loans"}/>
        <ListColumn/>
    </main>
  )
}

export default Accounts