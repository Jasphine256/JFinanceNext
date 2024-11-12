import TransactionsList from "@/components/lists/TransactionsList"
import PageTitle from "@/components/widgets/PageTitle"

const sample = [
  {
    id: '1',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
    bool_field:true,
  },
  {
    id: '2',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '3',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '4',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '5',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '6',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '7',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '8',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '9',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
  {
    id: '10',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
  },
]

const Transactions = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4 mt-16">
        <PageTitle title={"Your Transactions"}/>
        <TransactionsList/>
    </main>
  )
}

export default Transactions