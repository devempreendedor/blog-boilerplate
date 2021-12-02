import NextHead from 'next/head'
import meta from 'data/metaSite.json'
import { useRouter } from 'next/router'
import { MetaProps } from 'types/layout'

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter()
  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta
        property="og:url"
        content={`${meta.siteUrl}${router.asPath}`}
      />
      <link rel="canonical" href={`${meta.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Hunter Chang - Website" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:image"
        content={`${meta.siteUrl}/${meta.image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@huntarosan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta
        name="twitter:image"
        content={`${meta.siteUrl}/${meta.image}`}
      />
      {customMeta?.date && (
        <meta property="article:published_time" content={customMeta.date} />
      )}
    </NextHead>
  )
}

export default Head
