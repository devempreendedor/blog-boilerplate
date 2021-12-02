import { ReactNode } from 'react'
import { MetaProps } from 'types/layout'
import Head from '../Head'

type LayoutProps = {
  children: ReactNode
  customMeta?: MetaProps
}

const Layout = ({ children, customMeta }: LayoutProps) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
