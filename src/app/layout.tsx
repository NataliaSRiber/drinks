import Nav from './components/nav'
import './globals.css'
import { Lato } from 'next/font/google'
import Providers from './providers'
import { SearchContextProvider } from './contexts/search-context'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-bio-rhyme',
})

export const metadata = {
  title: 'Cocktails website',
  description: 'Find out how to make delicious cocktails',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-hidden bg-newblue-950`}>
        <SearchContextProvider>
          <Providers>
            <Nav />
            {children}
          </Providers>
        </SearchContextProvider>
      </body>
    </html>
  )
}
