import Image from "next/image";

const transaction_data = [
    { id: "1", transId: 'J-d00d0dlkfj', type: 'deposit', amount: '99,000', date: '2023-01-23' },
    { id: "2", transId: 'J-d00d0dlkfj', type: 'withdraw', amount: '99,000', date: '2023-01-23' },
    { id: "3", transId: 'J-d00d0dlkfj', type: 'payment', amount: '99,000', date: '2023-01-23' },
    { id: "4", transId: 'J-d00d0dlkfj', type: 'deposit', amount: '99,000', date: '2023-01-23' },
    { id: "5", transId: 'J-d00d0dlkfj', type: 'withdraw', amount: '99,000', date: '2023-01-23' },
    { id: "6", transId: 'J-d00d0dlkfj', type: 'payment', amount: '99,000', date: '2023-01-23' },
];

export default function TransactionsList() {
    return (
        <ul role="list" className="divide-y divide-gray-900 w-full p-2 tablet:w-2/3">
            {transaction_data.map((transaction) => {
                let transactionBadge;
                if (transaction.type === 'deposit') {
                    transactionBadge = (
                        <div className="flex-none rounded-sm bg-green-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-sm bg-green-500" />
                        </div>
                    )
                } else if (transaction.type === 'withdraw') {
                    transactionBadge = (
                        <div className="flex-none rounded-sm bg-orange-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-sm bg-orange-500" />
                        </div>
                    )
                } else if (transaction.type === 'payment') {
                    transactionBadge = (
                        <div className="flex-none rounded-sm bg-blue-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-sm bg-blue-500" />
                        </div>
                    )
                }

                return (
                    <li key={transaction.id} className="w-full flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-[50%] gap-x-4">
                            <Image
                                alt={`${transaction.type} icon`}
                                src="https://img.icons8.com/3d-fluency/94/exchange.png"
                                width={50}
                                height={50}
                                className="h-12 w-12 flex-none"
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-lg font-semibold text-white">UGX {transaction.amount}</p>
                                <p className="mt-0.5 truncate text-xs text-white">TXN ID : {transaction.transId}</p>
                            </div>
                        </div>
                        <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm text-white">{transaction.date}</p>
                            <div className="mt-1 flex items-center gap-x-1.5">
                                {transactionBadge}
                                <p className="text-xs text-gray-500 font-bold">{transaction.type}</p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
