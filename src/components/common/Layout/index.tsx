import { ReactNode } from 'react'
import { MetaProps } from 'types/layout'
import Head from '../Head'
import Link from '../Link'
import { Container } from 'components/common'

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
      <header className="">
        <Container>
          <div className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label="Tailwind CSS Blog">
                <div className="flex items-center justify-between">
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    BoilerBlog
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
            <Navigation />
            <ThemeSwitch />
            </div>
          </div>
        </Container>
      </header>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
