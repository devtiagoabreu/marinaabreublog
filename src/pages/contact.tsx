import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import Instagram from '../components/svgs/instagram'
import Whatsapp from '../components/svgs/whatsapp'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: '#',
  },
  {
    Comp: Whatsapp,
    alt: 'whatsapp icon',
    link: '#',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: '#',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:mpcanoabreu@gmail.com',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contato</h1>

        <div className={contactStyles.name}>
          Marina Abreu - Tatuadora @{' '}
          <ExtLink href="https://marinaabreu.com.br">Site</ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
