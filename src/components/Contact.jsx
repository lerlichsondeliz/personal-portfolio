const LINKS = [
  { label: 'Email', href: 'mailto:lukasdeliz@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/lerlichsondeliz' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lukas-erlichson-deliz/' },
]

function Contact() {
  return (
    <div className="flex flex-col items-start gap-3">
      {LINKS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="text-lg font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-ink hover:decoration-ink dark:text-gray-300 dark:decoration-gray-600"
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default Contact
