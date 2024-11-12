import Image from "next/image"

const loans_data = [
    {
      id: '1',
      amount: '99,000',
      return: '170,050',
      dateDue: '2023-01-23',
      status: 'pending',
    },
    {
        id: '2',
        amount: '99,000',
        return: '170,050',
        dateDue: '2023-01-23',
        status: 'cleared',
    },
    {
        id: '3',
        amount: '99,000',
        return: '170,050',
        dateDue: '2023-01-23',
        status: 'pending',
    },
    {
        id: '4',
        amount: '99,000',
        return: '170,050',
        dateDue: '2023-01-23',
        status: 'cleared',
    },
    {
        id: '5',
        amount: '99,000',
        return: '170,050',
        dateDue: '2023-01-23',
        status: 'pending',
    },
    {
        id: '6',
        amount: '99,000',
        return: '170,050',
        dateDue: '2023-01-23',
        status: 'cleared',
    },
    
]

export default function LoansList() {
      return (
        <ul role="list" className="divide-y divide-gray-900 w-full p-2 w-full tablet:w-2/3">
          {loans_data.map((loan) => {
            var statusBadge;
            if (loan.status === "pending"){
                statusBadge = (
                    <div className="flex-none rounded-full bg-red-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </div>
                )
            }else{
                statusBadge = (
                    <div className="flex-none rounded-full bg-blue-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    </div>
                )
            }
            return (
                <li key={loan.id} className="w-full flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-1/2 gap-x-4">
                        <Image alt="" src="https://img.icons8.com/3d-fluency/94/stack-of-money.png" width={100} height={100} className="h-12 w-12 flex-none" />
                        <div className="min-w-0 flex-auto">
                        <p className="text-lg font-semibold text-white">UGX {loan.amount}</p>
                        <p className="mt-1/2 truncate text-xs/5 text-white ">RETURNING UGX {loan.return}</p>
                        </div>
                    </div>
                    <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm/6 text-white">{loan.dateDue}</p>
                        <div className="mt-1 flex items-center gap-x-1.5">
                            {statusBadge}
                            <p className="text-xs/5 text-gray-500 font-bold">{loan.status}</p>
                        </div>
                    </div>
                </li>
              )
          })}
        </ul>
      )
  }
  