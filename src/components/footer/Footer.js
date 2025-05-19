import React from "react"

export function Footer() {
    return (
        <footer className='bg-black text-white'>
            <div className='max-w-[1240px] mx-auto py-2 text-sm sm:text-base'>
                <div className='flex justify-center'>
                    <a href='#'
                       target='_blank'
                       rel="noreferrer"
                       className='capitalize border-b mb-3 text-base hover:text-gray-300 transition'
                    >
                        view source code on github
                    </a>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <p className='text-center'>© Copyright 2025 React Shop | All Rights Reserved</p>
                    <a href='#'
                       target="_blank"
                       rel="noreferrer"
                       className='hover:text-gray-300 transition'
                    >
                        Created by Vipul Devloper
                    </a>
                </div>
            </div>
        </footer>
    )
}
