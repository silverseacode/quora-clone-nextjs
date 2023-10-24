import React from 'react'
import { CgFeed } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GrNotification } from 'react-icons/gr'

export const menuItems = [{
    name: "home",
    icon: React.createElement(AiFillHome)
},
{
    name: "following",
    icon: React.createElement(CgFeed)
},
{
    name: "Answer",
    icon: React.createElement(IoCreateOutline)
},
{
    name: "Spaces",
    icon: React.createElement(FaPeopleGroup)
},
{
    name: "Notifications",
    icon: React.createElement(GrNotification)
},]