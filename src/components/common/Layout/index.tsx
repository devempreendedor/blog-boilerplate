import { ReactNode } from 'react'
import { MetaProps } from 'types/layout'
import Head from '../Head'
import Navigation from '../Navigation'
import ThemeSwitch from '../ThemeSwitch'

type LayoutProps = {
  children: ReactNode
  customMeta?: MetaProps
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <div>
              <span>Boilerplate</span>
            </div>
            <div className="flex items-center">
              <Navigation />
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
