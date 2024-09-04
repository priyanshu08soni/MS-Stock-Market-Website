import React from 'react'
import { MdOutlineLeaderboard } from "react-icons/md";

const Footer = () => {
  return (
    <footer >
        <div className='w-full mainfooter flex text-white'>
            <div className='footer-content1 w-25 flex flex-wrap'>
                <div className=" footer-logo flex align-content-center py-2"><MdOutlineLeaderboard  /></div>
                <div className='my-2'>
                    <h1 className='footer-font-1'>MS</h1>
                    <h1 className='footer-font-1'>Learn from market's past</h1>
                </div>
            </div>
            <div className='footer-content2 flex flex-wrap w-75'>
                <div className='flex flex-wrap' >
                    <div className='px-5 py-2'>
                        <h1 className='footer-font-1'>COMPANY</h1>
                        <h2 className='footer-font-2'>Privacy</h2>
                        <h2 className='footer-font-2'>Terms of Use</h2>
                    </div>
                    <div className='px-5 py-2'>
                        <h2 className='footer-font-2'>Disclaimer</h2>
                        <h2 className='footer-font-2'>Contact Us</h2>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='px-5 py-2'>
                        <h1 className='footer-font-1'>RESOURCES</h1>
                        <h2 className='footer-font-2'>Blog</h2>
                        <h2 className='footer-font-2'>Stock Market Widgets</h2>
                    </div>
                    <div className='px-5 py-2'>
                        <h2 className='footer-font-2'>FAQ</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-white mx-4 py-2'>&copy; Developers | All Right Reserved</div>
    </footer>
  )
}

export default Footer
