'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/Header'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: false,
      disable: 'phone',
      duration: 900,
      easing: 'ease-out-sine',
    })
  })

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      <Header />

      <main className="grow">

        {children}

      </main>

      <Footer />

    </div>
  )
}
