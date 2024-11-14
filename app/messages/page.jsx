import MessageList from "@/components/lists/MessagesList"
import PageTitle from "@/components/widgets/PageTitle"

const sample = [
  {
    id: '1',
    field1: 'leslie.alexander@example.com',
    field2: 'Co-Founder / CEO',
    field3: '3h ago',
    field4: '2023-01-23T13:23Z',
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

const Messages = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center p-1 sm:p-4 mt-16">
        <PageTitle title={"Messages & Notificatios"}/>
        <MessageList/>
    </main>
  )
}

export default Messages;