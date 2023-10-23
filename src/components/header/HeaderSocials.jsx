import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'

const HeaderSocials =  () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/devfrontend-analystfunctional/" target="blank"><BsLinkedin/></a>
            <a href="https://github.com/Tic97" target="blank"><FaGithub/></a>
            <a href="#" target="_blank"><SiGmail/></a>
        </div>
    )
 }

 export default HeaderSocials