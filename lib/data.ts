import React from 'react'
import { CgFeed } from 'react-icons/cg'
import { AiFillHome } from 'react-icons/ai'
import { IoCreateOutline } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GrNotification } from 'react-icons/gr'

export const menuItems = [{
    route: "/",
    icon: React.createElement(AiFillHome)
},
{
    route: "/following",
    icon: React.createElement(CgFeed)
},
{
    route: "/answer",
    icon: React.createElement(IoCreateOutline)
},
{
    route: "/spaces",
    icon: React.createElement(FaPeopleGroup)
},
{
    route: "/notifications",
    icon: React.createElement(GrNotification)
},]