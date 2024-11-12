import LoansList from "@/components/lists/LoansList"
import Banner from "@/components/widgets/Banner"
import PageTitle from "@/components/widgets/PageTitle"

const Accounts = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4 mt-16">
      <Banner text={"Your Savings"} balance={"200,000"}/>
      <PageTitle title={"Your Loans"}/>
      <LoansList/>
    </main>
  )
}

export default Accounts;