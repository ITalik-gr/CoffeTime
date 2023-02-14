import './nav.scss';
import '../../style.scss';


export const Nav = (props) => {
  const pages = props.pages.map(item => {
    return (
      <li key={props.name} className="nav-list__item"><a href={item.link}> {item.name} </a></li>
    )
  })


  return (
    <nav className="nav">
      <a href="https://gog.com" className="nav-logo">
          <img src="img/logo.svg" alt="Logotype Coffe"/>
          Coffee house
      </a>
      <ul className="nav-list">
          {pages}
      </ul>
    </nav>
  )
}