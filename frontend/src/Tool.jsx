import React from 'react'
import onedoc from '../src/assets/onedoc.png'
import vr from '../src/assets/image.png'
const Tool = () => {
  return (
    <div>
      <div className='h-30 '>
        <p className=" text-xl sm:text-2xl font-bold text-center">Tools</p>
        <div className='flex justify-evenly items-center pt-2'>
        <a href="https://base-infra.com/OneDoc" className='h-[120px] w-[150px]'>
            <img src={onedoc} alt="" />
        </a>
        <a href="https://base-infra.com/vr" className='h-[120px] w-[150px]'>
            <img src={vr} alt="" />
        </a>
        <a className='h-[100px] w-[90px] mb-8' href="https://www.youtube.com/results?search_query=base+infra">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small_2x/youtube-logo-youtube-icon-transparent-free-png.png" alt="" />
        </a>
      </div>
      </div>
    </div>
  )
}

export default Tool
