import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_shirt } from '../../../Data/mens_shirt';

const HomePage = () => {
    return (
         <div>
                <MainCarousel/>
            <div className='space-y-10 py-20 flex flex-col' border='black'>
                <HomeSectionCarousel data={mens_shirt} sectionName={'Mens_shirt'}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={'Mens_shirt'}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={'Mens_shirt'}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={'Mens_shirt'}/>
                <HomeSectionCarousel data={mens_shirt} sectionName={'Mens_shirt'}/>
            </div>

         </div>
    )
}

export default HomePage;
