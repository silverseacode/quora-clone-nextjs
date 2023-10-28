"use client"
import { useModalContext } from '@/context/modal-context'
import React from 'react'

export default function BackdropSearch() {
    const {isSearchOpen, setSearchOpen} = useModalContext()
  return (
    <>
    {isSearchOpen && (
        <div
          onClick={() => setSearchOpen(false)}
          className="bg-black opacity-75 h-full w-full z-10"
        ></div>
      )}
  </>
  )

}
