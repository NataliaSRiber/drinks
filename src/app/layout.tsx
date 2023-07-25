import Nav from './components/nav'
import './globals.css'
import { BioRhyme } from 'next/font/google'
import Providers from './providers'
import { SearchContextProvider } from './contexts/search-context'

const bioRhyme = BioRhyme({ subsets: ['latin'],  weight: [ '200', '300', '400', '700', '800'], display: 'swap',
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
      <body className={bioRhyme.className}>
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
