import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
