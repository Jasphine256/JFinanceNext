import Package from "../widgets/Package"

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '/n',
      imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: 'd',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '/h',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '/k',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '/j',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
  ]
  
  export default function PackageRow() {
    return (
      <div className="w-full">
        <div className="mx-auto max-w-2xl p-4 sm:px-6 sm:p-4 lg:max-w-7xl lg:p-4">
          <h2 className="text-2xl font-bold tracking-tight">Loan Packages</h2>
  
          <div className="mt-6 flex flex-row items-start justify-start gap-x-6 gap-y-10 overflow-x-scroll scrollbar">
            {products.map((product) => (
                <div key={product.href} className="min-w-[300px] max-w-[500px]">
                    <Package package={product}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  