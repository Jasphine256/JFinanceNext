import Link from "next/link"

const NavigationLink = (props) =>{
    return(
        <li className="w-full p-2 transition duration-0 ease-in-out hover:duration-500 hover:ml-2">
            <Link href={props.url}>{props.text}</Link>
        </li>
    )
}

const links = [
    {
        url: "/",
        text: "Home",
        icon: ""
    },
    {
        url: "/loans",
        text: "My Loans",
        icon: ""
    },
    {
        url: "/savings",
        text: "My savings",
        icon: ""
    },
    {
        url: "/packages/loans",
        text: "Loan Packages",
        icon: ""
    },
    {
        url: "/packages/savings",
        text: "Savings Packages",
        icon: ""
    },
    {
        url: "/transactions",
        text: "Transactions",
        icon: ""
    },
    {
        url: "/installments",
        text: "Installments",
        icon: ""
    },
    {
        url: "/penalties",
        text: "Penalties",
        icon: ""
    },
    {
        url: "/notifications",
        text: "Notifications",
        icon: ""
    },
    {
        url: "/profile",
        text: "Profile",
        icon: ""
    },
    {
        url: "/about",
        text: "About",
        icon: ""
    },
    {
        url: "/help",
        text: "Help & Feedbcak",
        icon: ""
    },
]

const SideBar = () => {
  return (
    <div  className="flex w-1/4 h-full p-4 mt-2 flex-col items-center justify-start border-r border-gray-700 rounded-sm">
        <section className="flex flex-row gap-4">
            <div className="round bg-blue-300 p-4 pt-1">
                <h1 className="text-xl font-bold">X</h1>
            </div>
            <div>
                <h3 className="font-bold">John Doe</h3>
                <h4 className="text-sm">+256745201484</h4>
            </div>
        </section>
        <nav className="w-full m-2 p-2 bg-black">
            <ul className="w-full">
                {
                    links.map((link)=>(
                        <div key={link.text} className="w-full">
                            <NavigationLink url={link.url} text={link.text}/>
                        </div>
                    ))
                }
            </ul>
        </nav>
    </div>
  )
}

export default SideBar;