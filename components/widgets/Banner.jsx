import Image from "next/image"

const Banner = (props) => {
  return (
    <div className="p-2 w-full">
        <section className="w-full flex flex-col justify-center items-center flex-nowrap tablet:flex-row  tablet:justify-between bg-zinc-900 rounded-md py-6 tablet:py-0">
            <h3 className="text-white font-bold text-2xl mobile-lg:text-3xl p-2">{props.text}</h3>
            <div className="border border-gray-500 rounded-full p-2 px-4 m-4 tablet:my-2 flex items-center justify-center gap-2">
                <Image alt="" src="https://img.icons8.com/3d-fluency/94/coins.png" width={100} height={100} className="h-12 w-12 flex-none" />
                <h4 className="text-2xl">Bal: <span className="font-bold">UGX</span> {props.balance}</h4>
            </div>
            <div className="p-4 flex flex-row flex-warp justify-center items-center">
                <button className="p-2 bg-green-950 rounded font-bold text-md mx-2">DEPOSIT</button>
                <button className="p-2 bg-orange-950 rounded font-bold text-md mx-2">WITHDRAW</button>
                <button className="p-2 bg-blue-950 rounded font-bold text-md mx-2">PAY LOAN</button>
            </div>
        </section>
    </div>
  )
}

export default Banner