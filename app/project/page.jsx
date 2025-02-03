import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='projects'>
        <div className="title_projects flex flex-col justify-center items-center mt-[50px] md:mt-[70px]">
            <h1 className='text-[50px]'>پروژه های من</h1>
            <div className="links_project flex gap-2 mt-4 text-[17px]">
                <Link href="/" className='text-orange-300'>صفحه اصلی</Link>
                /
                <span className='text-[#999]'>پروژه ها</span>
            </div>
        </div>
    </div>
  )
}

export default Page