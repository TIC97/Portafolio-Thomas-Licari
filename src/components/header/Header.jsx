import './header.css'
import CVS from './CV'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thomas Surbando Licari</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CVS />
        <HeaderSocials />
      
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__dowmn'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header