import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-wrap">
                <div className="footer-top">
                    <a href="#" className="footer-logo">
                        <img src="img/footer_logo.svg" alt="Logotype Coffe"/>
                        Coffee house
                    </a>
                    <ul className="footer-list">
                        <li className="footer-list__item"><a href="#">Our coffee</a></li>
                        <li className="footer-list__item"><a href="#">For your pleasure</a></li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <div className="black-line">
                        <img src="img/coffe_black.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}