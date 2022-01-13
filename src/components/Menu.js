import '../scss/Menu.scss';
import hamburguer from '../assets/icons/menu.svg';
import user from '../assets/icons/Usuario.svg';
import fill from '../assets/icons/Fill.svg';

const Menu = ({content}) => {



    return (
        <nav className='menu'>
            {
              content === "Documentación" 
              ? <img src={hamburguer} alt='hamburguer'/> 
              : null
            }

            <h2>{content}</h2>

            {
                content === "Documentación"
                ? <div className='submenu'>
                    <img src={user} alt="perfil" />
                    <img src={fill} alt="fill" />
                </div>
                : null
            }
        </nav>
    )
}

export default Menu
