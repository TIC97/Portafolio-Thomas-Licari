import './portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



//* DO NOT USE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visalization',
    github: 'https://github.com/Tic97',
    demo: 'https://github.com/Tic97'
  },
]

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>
      
      <div className="container portafolio__container">
        {
          data.map(({id, image,title, github, demo}) => {
            return (
              <article key={id} className='portafolio__item'>
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portafolio__item-cta">
                <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio