import React, { useEffect } from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { findProducts } from '../../../State/Product/Action';
import { store } from '../../../State/store';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const dispatch = useDispatch()
    let { product } = useSelector(store => store);
    
    useEffect(() => {
        let data = {
            category: "Activewear",
            color: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 2,
            pageSize: 10,
            stock: ''
        }
        dispatch(findProducts(data));
    }, [dispatch])
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 py-20 flex flex-col' border='black'>
                <HomeSectionCarousel data={product?.products} sectionName={'Trending'} />
                <HomeSectionCarousel data={product?.products} sectionName={'Trending'} />
                <HomeSectionCarousel data={product?.products} sectionName={'Trending'} />
                <HomeSectionCarousel data={product?.products} sectionName={'Trending'} />
            </div>

        </div>
    )
}

export default HomePage;
