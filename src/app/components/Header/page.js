import React from 'react'
import './page.css'

import { FiHome } from "react-icons/fi";

import { BsPeopleFill } from "react-icons/bs";

import { ImFilesEmpty } from "react-icons/im";

import { CiBellOn } from "react-icons/ci";

import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";

export default function Header() {
  return (
    <div className='header-bg-con'>
      <div>
      <FiHome className='header-icon'></FiHome>
      <BsPeopleFill className='header-icon'></BsPeopleFill>
      <ImFilesEmpty className='header-icon'></ImFilesEmpty>
      <CiBellOn className='header-icon'></CiBellOn>
      </div>
      <div>
        <IoSettingsOutline className='header-icon'></IoSettingsOutline>
        <CiFlag1 className='header-icon'></CiFlag1>
      </div>
    </div>
  )
}

 