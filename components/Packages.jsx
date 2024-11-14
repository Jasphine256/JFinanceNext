import Link from "next/link"
const packages = [
  {
    id: 1,
    name: 'BASIC PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: '100,000',
    return: '110,000',
    days: '30 days',
  },
  {
    id: 2,
    name: 'ADVANCED PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: '500,000',
    return: '510,000',
    days: '90 days',
  },
  {
    id: 3,
    name: 'PLATINUM PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: '1,000,000',
    return: '1,010,000',
    days: '120 days',
  },
  {
    id: 4,
    name: 'SILVER PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: '1,5000,000',
    return: '1,5010,000',
    days: '180 days',
  },
  {
    id: 5,
    name: 'GOLD PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: '2,000,000',
    return: '2,010,000',
    days: '210 days',
  },
  {
    id: 6,
    name: 'CUSTOM PACKAGE',
    imageSrc: '/images/package image.png',
    imageAlt: "loan packege.png",
    amount: 'ANY AMOUNT',
    return: 'amount + 10% interest',
    days: '60 days',
  },
]

export default function PackageRow(props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl p-4 sm:px-6 sm:p-4 lg:max-w-7xl lg:p-4">
        <h2 className="text-2xl font-bold tracking-tight">{props.title}</h2>

        <div className="mt-6 flex flex-row items-start justify-start gap-x-6 gap-y-10 overflow-x-scroll scrollbar">
          {packages.map((item) => (
            <Link href={'/packages/view'} key={item.id} className="min-w-[300px] max-w-[500px]">
              <div className="group relative w-full">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    alt={item.imageAlt}
                    src={"/images/loan packege.png"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.name}</h3>
                      <p className="mt-1 text-sm text-white">{item.days}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="text-sm text-green-500 font-bold">{item.amount}</h3>
                      <p className="mt-1 text-sm text-blue-500 font-bold">RETURNING {item.return}</p>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
  