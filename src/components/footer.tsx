import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Rota no Maps</span>
        <ExtLink href="https://www.google.com/maps/dir//Av.+Monte+Castelo,+603+-+Centro,+Santa+B%C3%A1rbara+d'Oeste+-+SP,+13450-031/@-22.7547709,-47.4249321,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c89dbbb8521019:0x2dba7568462cf6df!2m2!1d-47.4228283!2d-22.7547357">
          <img
            src="/maps.png"
            height={120}
            width={132}
            alt="google maps"
          />
        </ExtLink>
        <span>
          desenvolvido por{' '}
          <ExtLink href="http://atriostech.com.br">
          Vercel | AtriosTech
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
