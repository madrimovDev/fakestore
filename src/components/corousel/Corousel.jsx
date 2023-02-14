import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper';

import 'swiper/css'
import 'swiper/css/pagination';

import data from './corouselData'

const Corousel = () => {
    return (
        <Swiper className='h-[400px]' modules={[Pagination]} pagination={{ clickable: true }}>
            {
                data.map(d => {
                    return (<SwiperSlide key={d.id} className='h-full  py-4'>
                        <div className='flex justify-around h-full items-center relative'>
                            <div>
                                <h1 className='text-4xl font-bold mb-4'>{d.title}</h1>
                                <a className='px-8 py-4 mr-2 rounded-xl inline-block text-white bg-amber-500' href="">Shop Now</a>
                                <a className='px-8 py-4 rounded-xl  border border-orange-400' href="">View More</a>
                            </div>
                            <img className='h-full w-[400px] object-cover' src={d.imgSrc} alt="" />
                            <span className='absolute bottom-0 right-[15%] rounded-full flex justify-center items-center text-white text-3xl w-32 h-32 bg-amber-500'>Only <br /> {d.price}</span>
                        </div>
                    </SwiperSlide>)
                })
            }
        </Swiper>
    )
}

export default Corousel