import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Shoppers',
  description: 'Shoppers - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
