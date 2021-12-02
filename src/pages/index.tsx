import { Layout } from 'components/common'

function HomePage() {
  return (
    <Layout>
      <div className="max-w-5xl px-8 py-4 mx-auto">
        <h1>Welcome to Next Boilerplate!</h1>
        <p>Um boilerplate de fácil inicialização</p>
        <ul>
          <li>Next.Js</li>
          <li>Typescript</li>
          <li>TailwindCss</li>
          <li>MDX</li>
          <li>Eslint and Prettier</li>
        </ul>
      </div>
    </Layout>
  )
}

export default HomePage
