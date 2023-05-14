import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import Plus from '../components/svgs/plus'
import Instagram from '../components/svgs/instagram'
import Whatsapp from '../components/svgs/whatsapp'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Whatsapp,
    alt: 'whatsapp icon',
    link: 'https://wa.me/5519998235889',
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
          <img src="/avatar.png" alt="avatar marina abreu" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contato</h1>

        <div className={contactStyles.name}>
          Marina Abreu - Tattoo Art`s {' '}
          <ExtLink href="https://www.instagram.com/maritattoo.art/">@maritattoo.art</ExtLink>
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
