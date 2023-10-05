"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import image from '../../public/provided.jpg'
import { CiMenuKebab } from 'react-icons/ci'
import { AiOutlineCamera, AiOutlineHeart } from 'react-icons/ai'
import { ImHammer2 } from 'react-icons/im'
import { BiSolidTachometer } from 'react-icons/bi'


interface CarCardProps {
    car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group">

            <div className='relative w-full '>
                <div className=" overflow-hidden">
                    <Image
                        src={image}
                        alt="car model"
                        className="rounded-t-3xl w-full h-[122px]"
                        priority={true}
                    />
                </div>
            </div>

            <div className="overlayingbtns flex  absolute gap-2 top-[450px] right-[90px] ">
                <a
                    className="inline-block rounded-full shadow sahdow-sm border  border-gray-300 bg-white p-3 "
                    href="/"
                >
                    <AiOutlineCamera size="18" className="text-black-600  hover:text-gray-600 " />
                </a>
                <a
                    className="inline-block rounded-full  shadow sahdow-sm border border-gray-300 bg-white p-3   "
                    href="/"
                >
                    <AiOutlineHeart size="18" className="text-black-600  hover:text-gray-600 " />
                </a>
                <a
                    className="inline-block rounded-full shadow sahdow-sm border border-gray-300 bg-white p-3   "
                    href="/"
                >
                    <CiMenuKebab size="18" className="text-black-600 fill hover:text-gray-600 " />
                </a>

            </div>

            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <div className='flex e w-full justify-between text-grey'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <span
                        className=" flex flex-row whitespace-nowrap rounded-[5px] bg-gray-300 px-2.5 py-0.5 text-sm text-gray-900"
                    >
                        <BiSolidTachometer />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </span>
                    <span
                        className=" flex flex-row gap-2 whitespace-nowrap rounded-[5px] bg-green-100 px-2.5 py-0.5 text-sm text-green-900"
                    >
                        <BiSolidTachometer />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </span>
                </div>
            </div>

            <div className='flex e w-full justify-between text-grey'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <span
                        className=" flex flex-row whitespace-nowrap rounded-[5px] bg-gray-300 px-2.5 py-0.5 text-sm text-gray-900"
                    >
                        <BiSolidTachometer />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </span>
                    <span
                        className=" flex flex-row gap-2 whitespace-nowrap rounded-[5px] bg-green-100 px-2.5 py-0.5 text-sm text-green-900"
                    >
                        <BiSolidTachometer />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </span>
                </div>
            </div>

            <div className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <div className='self-start text-[14px] text-gray-600 font-semibold'>AED</div>
                {carRent}
            </div>


            <a
                className=" flex flex-row w-80 gap-3 rounded items-center bg-black px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:bg-red-700"
                href="/download"
            >
                <ImHammer2 size='22' className="" />
                <div>
                    Bid Now
                </div>
            </a>

        </div>

    )
}

export default CarCard