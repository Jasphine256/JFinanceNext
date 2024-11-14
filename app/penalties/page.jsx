import PenaltyList from "@/components/lists/PenaltyList"
import PageTitle from "@/components/widgets/PageTitle"

const Penalties = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4 mt-16">
        <PageTitle title={"Delay Penalties"}/>
        <PenaltyList/>
    </main>
  )
}

export default Penalties;