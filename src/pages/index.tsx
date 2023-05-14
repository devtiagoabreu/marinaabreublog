import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <div className="covertop">
          <img
            src="/marina_abreu_blog_002.jpg"
            id='imgtopo'
            height="0.0001"
            width="0.0001"
            alt="Marina Abreu"
          />
        </div>
        <h1>Marina Abreu :
          <ExtLink
            href="https://marinaabreublog.vercel.app/blog"
          >
            : Blog
          </ExtLink>
        </h1>

        <h2>
          {' '}
          <ExtLink
            href="https://marinaabreublog.vercel.app/blog"
          >
            Tattoo Art`s
          </ExtLink>
        </h2>

        <Features />

        <div className="explanation">
          <p>
            Olá e bem-vindos ao meu blog! Meu nome é Marina Abreu e sou tatuadora 
            há 4 anos. Como uma profissional que trabalha com arte na pele, percebi 
            que muitas pessoas têm dúvidas em relação ao processo de cicatrização 
            da tatuagem e aos cuidados necessários após o procedimento. 
            Foi por isso que decidi criar este espaço para compartilhar minhas 
            experiências e conhecimentos com vocês.
          </p>

          <p>
            Aqui no blog, você encontrará dicas valiosas sobre como cuidar da sua 
            tatuagem após a cicatrização, técnicas que utilizo em meus trabalhos, 
            além de outras curiosidades sobre o mundo da tattoo. Meu objetivo é 
            ajudar você a ter uma experiência positiva e satisfatória com a sua 
            tatuagem, desde o momento em que ela é feita até o momento em 
            que cicatriza e permanece por toda sua vida.
          </p>

          <p>
            Nestes anos, adquiri muito conhecimento sobre a arte de tatuar 
            e estou sempre me atualizando sobre as melhores práticas e técnicas 
            para oferecer aos meus clientes o melhor serviço possível. Aqui no 
            blog, estou animada para compartilhar com vocês um pouco do que aprendi 
            e responder a todas as suas dúvidas sobre tatuagem.
          </p>

          <p>
            Então, se você é um entusiasta de tatuagem ou está pensando em fazer 
            a sua primeira, este é o lugar certo para você. Fique à vontade para 
            explorar o blog e deixar um comentário caso tenha alguma dúvida ou 
            sugestão de tópico. Vamos aprender juntos!
          </p>
        </div>
      </div>
    </>
  )
}
