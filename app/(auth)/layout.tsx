import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

interface Props {
  children: React.ReactNode
}
const metadata = {
  title: 'Threaddit',
  description: 'A thread app built with Next.js',
}

const layout = ({ children }: Props) => {
  return (
    <ClerkProvider>
      <div>

      </div>

    </ClerkProvider>
  )
}

export default layout
