import Link from 'next/link'
import React from 'react'

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    // we can add more properties we need from next/link in the future
  }


const CustomLink = ({ href, ...rest }: IProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink