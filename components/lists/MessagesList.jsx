import Image from "next/image"

const loans_data = [
    {
        id: '1',
        title: 'LATE  PAYMENT PENALTY',
        date: '2023-01-23',
        type: 'execution',
        content: 'You have reached your loan payment period limit and offered a penalty: 1000/day',
    },
    {
        id: '2',
        title: 'LATE PAYMENT WARNING',
        date: '2023-01-23',
        type: 'warning',
        content: 'You are soon hitting your loan payment period limit and will be offered a penalty: 1000/day',
    },
    {
        id: '3',
        title: 'LOAN REQUEST CONFIRMATION',
        date: '2023-01-23',
        type: 'information',
        content: 'Your loan request of the basic package has been confirmed, payment due 22-10-2024',
    },
    {
        id: '4',
        title: 'LOAN REQUEST DENIAL',
        date: '2023-01-23',
        type: 'execution',
        content: 'You have been denied the requested loan because you still have an outstanding loan',
    },
    {
        id: '5',
        title: 'LOAN PAYMENT CONFIRMATION',
        date: '2023-01-23',
        type: 'information',
        content: 'Your loan payment of UGX 10000 has been processed successfully',
    },
    {
        id: '6',
        title: 'LATE PAYMENT WARNING',
        date: '2023-01-23',
        type: 'warning',
        content: 'You are soon hitting your loan payment period limit and will be offered a penalty: 1000/day',
    },
    
]

export default function MessageList() {
      return (
        <ul role="list" className="divide-y divide-gray-900 w-full p-2 w-full tablet:w-2/3">
          {loans_data.map((loan) => {
            var statusIcon;
            if (loan.type === "warning"){
                statusIcon = (
                    <Image alt="" src="https://img.icons8.com/3d-fluency/94/box-important.png" width={100} height={100} className="h-12 w-12 flex-none" />
                )
            }else if (loan.type === 'execution'){
                statusIcon = (                        
                    <Image alt="" src="https://img.icons8.com/3d-fluency/94/high-priority.png" width={100} height={100} className="h-12 w-12 flex-none" />
                )
            }else if (loan.type === 'information'){
                statusIcon = (                        
                    <Image alt="" src="https://img.icons8.com/3d-fluency/94/filled-message.png" width={100} height={100} className="h-12 w-12 flex-none" />
                )
            }
            return (
                <li key={loan.id} className="w-full flex justify-between items-center gap-x-6 py-5">
                    <div className="flex w-5/6 gap-x-4">
                        {statusIcon}
                        <div className="min-w-0 flex-auto">
                        <p className="text-md font-semibold text-white">{loan.title}</p>
                        <p className="mt-1/2 truncate text-sm text-white ">{loan.content}</p>
                        </div>
                    </div>
                    <div className="pr-1 shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-xs text-green-500 font-bold">{loan.date}</p>
                    </div>
                </li>
              )
          })}
        </ul>
      )
  }
  