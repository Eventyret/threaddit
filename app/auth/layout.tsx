import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import React from 'react'

import '../globals.css'

interface Props {
  children: React.ReactNode
}
const metadata = {
  title: 'Threaddit',
  description: 'A thread app built with Next.js',
}
const inter = Inter({ subsets: ['latin'] })

const layout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

export default layout
