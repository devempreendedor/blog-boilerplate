import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import 'styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
