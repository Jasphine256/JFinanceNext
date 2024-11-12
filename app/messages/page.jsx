import ListColumn from "@/components/compositions/ListColumn"
import PageTitle from "@/components/widgets/PageTitle"

const Chats = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4">
        <PageTitle title={"Messages & Notificatios"}/>
        <ListColumn/>
    </main>
  )
}

export default Chats;