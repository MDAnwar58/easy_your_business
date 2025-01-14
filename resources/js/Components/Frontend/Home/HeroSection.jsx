import React from 'react';
import Container from '../Container';
import microsoft from '@/Assets/Frontend/images/clients/microsoft.svg';
import airbnb from '@/Assets/Frontend/images/clients/airbnb.svg';
import google from '@/Assets/Frontend/images/clients/google.svg';
import ge from '@/Assets/Frontend/images/clients/ge.svg';
import netflix from '@/Assets/Frontend/images/clients/netflix.svg';
import googleCloud from '@/Assets/Frontend/images/clients/google-cloud.svg';

const HeroSection = () => {
    return (
        <div className="relative" id="home">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
            </div>
            <Container>
                <div className="relative pt-36 ml-auto">
                    <div className="lg:w-2/3 text-center mx-auto">
                        <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Shaping a world with <span className="text-primary dark:text-white">reimagination.</span></h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                <span className="relative text-base font-semibold text-white">Get started</span>
                            </a>
                            <a href="#" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                                <span className="relative text-base font-semibold text-primary dark:text-white">Learn more</span>
                            </a>
                        </div>
                        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                            <div className="text-left">
                                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                                <p className="mt-2 text-gray-500">Some text here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

    );
}

export default HeroSection;
