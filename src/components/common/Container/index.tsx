import { ReactNode } from "react"

type ContainerProps = {
    children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
    return <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
}

export default Container
