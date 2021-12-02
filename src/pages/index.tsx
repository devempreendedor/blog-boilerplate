import { Layout } from 'components/common'
import { GetStaticProps } from 'next'
import { PostType } from 'types/post'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

type HomeProps = {
  posts: PostType[]
}

function HomePage({ posts }: HomeProps) {
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
        <div>
          {posts.map((post) => (
            <article key={post.slug} className="mt-12">
              <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
              </p>
              <h1 className="mb-2 text-xl">
                <Link as={`/p/${post.slug}`} href={`/p/[slug]`}>
                  <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                    {post.title}
                  </a>
                </Link>
              </h1>
              <p className="mb-3">{post.description}</p>
              <p>
                <Link as={`/p/${post.slug}`} href={`/p/[slug]`}>
                  <a>Read More</a>
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'])

  return {
    props: { posts },
  }
}

export default HomePage
