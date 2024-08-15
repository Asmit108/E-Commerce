/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_shirt } from '../../../Data/mens_shirt'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProductById } from '../../../State/Product/Action'
import { addItemToCart } from '../../../State/Cart/Action'

const cproduct = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState(cproduct.colors[0])
    const [selectedSize, setSelectedSize] = useState(cproduct.sizes[2])
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {product}=useSelector(store=>store)
    const { productId } = useParams();

    const handleAddToCart=async()=>{
        const data={
            productId:productId,
            size:selectedSize.name
        }
        console.log("client_data",data);
        dispatch(addItemToCart(data));
        navigate(`/cart`);
    }

    useEffect(()=>{
        console.log("productId",productId);
        dispatch(findProductById(productId));
        console.log(product.product);
    },[dispatch,productId])
   
    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li className="text-sm">
                            <a href='#' aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product?.product?.category?.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                src={product?.product?.imageUrl}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.product?.category?.name}</h1>
                            <h1 className='font-medium text-gray-400'>Hand cut and sewn locally</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">${product?.product?.price}</p>
                            
                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                            {/* <form className="mt-10 w-[15rem]"> */}
                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                            {cproduct.sizes.map((size) => (
                                                <RadioGroup.Option
                                                    key={size.name}
                                                    value={size}
                                                    disabled={!size.inStock}
                                                    className={({ active }) =>
                                                        classNames(
                                                            size.inStock
                                                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                            'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                            {size.inStock ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'border' : 'border-2',
                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                    )}
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                >
                                                                    <svg
                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                        viewBox="0 0 100 100"
                                                                        preserveAspectRatio="none"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none"
                                    onClick={handleAddToCart}
                                >
                                    ADD TO CART
                                </button>
                            {/* </form> */}
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product?.product?.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {cproduct.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{cproduct.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/*Ratings and Reviews*/}
                <section>
                    <h1 className='font-semibold text-lg pb-4 pl-20'>Recent Reviews & Ratings </h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) =>
                                         <ProductReviewCard />)}
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <h1 className='text-xl font-bold pb-1'>Product Ratings</h1>
                                <div className='flex'>
                                    <Rating value={4.5} precision={.5} readOnly />
                                    <p className='opacity-60 pl-[0.5rem]'>598765 Ratings</p>
                                </div>
                                <div>
                                    <Grid container alignItems="center" gap={2} className='mt-0.5'>
                                        <Grid item xs={1.54}>
                                            <p>Excellent</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress variant="determinate" value={40} color='success' sx={{
                                                borderRadius: 4, height: 7
                                                , bgcolor: '#d0d0d0'
                                            }} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='mt-0.5'>
                                        <Grid item xs={1.54}>
                                            <p>Very Good</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress variant="determinate" value={30} color='success' sx={{
                                                borderRadius: 4, height: 7
                                                , bgcolor: '#d0d0d0'
                                            }} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='mt-0.5'>
                                        <Grid item xs={1.54}>
                                            <p>Good</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress variant="determinate" value={25} className='bg-yellow-300' sx={{
                                                borderRadius: 4, height: 7
                                                , bgcolor: '#d0d0d0'
                                            }} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='mt-0.5'>
                                        <Grid item xs={1.54}>
                                            <p>Average</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress variant="determinate" value={20} color='warning' sx={{
                                                borderRadius: 4, height: 7
                                                , bgcolor: '#d0d0d0'
                                            }} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2} className='mt-0.5'>
                                        <Grid item xs={1.54}>
                                            <p>Poor</p>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress variant="determinate" value={10} color='error' sx={{
                                                borderRadius: 4, height: 7
                                                , bgcolor: '#d0d0d0'
                                            }} />
                                        </Grid>
                                    </Grid>
                                </div>

                            </Grid>
                        </Grid>
                    </div>
                </section>

                {/*similar products*/}

                <section className='pt-10'>
                    <h1 className='font-semibold text-lg pb-4 pl-20'> Similar Products </h1>
                    <div className='flex flex-wrap space-y-5 space-x-1'>{mens_shirt.map((item) => <HomeSectionCard product={item} />)}</div>

                </section>
            </div>
        </div>
    )
}

