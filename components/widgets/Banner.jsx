const Banner = () => {
  return (
    <div className="p-2 w-full">
        <section className="w-full flex flex-col justify-center items-center flex-nowrap tablet:flex-row  tablet:justify-between bg-zinc-900 rounded-md py-6 tablet:py-0">
            <h3 className="text-white font-bold text-xl mobile-lg:text-3xl p-2">Welcome Jasper</h3>
            <div className="border border-gray-500 rounded-full p-2 px-4 m-4 tablet:my-2">
                <h4 className="text-2xl">Bal: <span className="font-bold">UGX</span> 279,000,000</h4>
            </div>
            <div className="p-4">
                <button className="p-2 bg-green-950 rounded font-bold text-sm mx-2">DEPOSIT</button>
                <button className="p-2 bg-orange-950 rounded font-bold text-sm mx-2">WITHDRAW</button>
                <button className="p-2 bg-blue-950 rounded font-bold text-sm mx-2">PAY LOAN</button>
            </div>
        </section>
    </div>
  )
}

export default Banner