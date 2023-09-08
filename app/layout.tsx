import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'CASFOUST',
  description:'dj (& dev & ph)'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
