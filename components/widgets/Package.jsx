
const Package = (props) => {
  return (
    <div className="group relative w-full">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
            alt={props.package.imageAlt}
            src={props.package.imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
            <h3 className="text-sm text-white">
                <a href={props.package.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {props.package.name}
                </a>
            </h3>
            <p className="mt-1 text-sm text-white">{props.package.color}</p>
            </div>
            <p className="text-sm font-medium text-white">{props.package.price}</p>
        </div>
    </div>
  )
}

export default Package;