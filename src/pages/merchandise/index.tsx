import Sidebar from '@/components/sidebar'
import React from 'react'
import products from '@/data/merch/products'
import customerProd from '@/data/merch/customerprod'

const Merchandise = () => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <div className='flex flex-col flex-1 p-8 gap-1 bg-[#f4f7fe] overflow-scroll'>
                <h1 className='tracking-wide font-bold text-[#0353a4] text-3xl'>Elevate Your Style</h1>
                <p className='tracking-wide text-lg '>Discover Exclusivity in Our Merchandise Emporium!</p>
                <div className="bg-transparent">
                    <div className="mx-auto max-w-2xl py-6 lg:max-w-7xl">
                        <h2 className="sr-only">Products</h2>

                        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {products.map((product: any) => (
                                <a key={product.id} href={product.href} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-transparent border-t border-gray-300 pt-4">
                    <div className="mx-auto max-w-2xl lg:max-w-7xl">
                        <h2 className="text-2xl font-semibold tracking-wide text-gray-900">Customers also purchased</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {customerProd.map((customerProd) => (
                                <div key={customerProd.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={customerProd.imageSrc}
                                            alt={customerProd.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={customerProd.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {customerProd.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{customerProd.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{customerProd.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchandise
