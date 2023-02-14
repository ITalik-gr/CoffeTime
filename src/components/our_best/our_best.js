import './our_best.scss';
import '../../style.scss'

export const OurBestBlock = (props) => {

  const cards = props.ourBestCards.map(item => {
    return (
      <a href="#" className="our-best-card">
        <div className="our-best-card__image">
            <img src={item.image} alt={item.name}/>
        </div>
        <div className="our-best-card__name">
            {item.name}
        </div>
        <div className="our-best-card__price">
            {item.price}$
        </div>
     </a>
    )
  })

  return (
    <div className="our-best">
      <div className="container">
          <div className="our-best__wrap">
              <h3 className="our-best__title">
                  Our best
              </h3>
              <div className="our-best__body">
                  {cards}
                  {/* <a href="#" className="our-best-card">
                      <div className="our-best-card__image">
                          <img src="img/coffe_item_main_1.png" alt=""/>
                      </div>
                      <div className="our-best-card__name">
                          Solimo Coffee Beans 2 kg
                      </div>
                      <div className="our-best-card__price">
                          10.73$
                      </div>
                  </a>
                  <a href="#" className="our-best-card">
                      <div className="our-best-card__image">
                          <img src="img/coffe_item_main_2.png" alt=""/>
                      </div>
                      <div className="our-best-card__name">
                          Presto Coffee Beans 1 kg
                      </div>
                      <div className="our-best-card__price">
                          15.99$
                      </div>
                  </a>
                  <a href="#" className="our-best-card">
                      <div className="our-best-card__image">
                          <img src="img/coffe_item_main_3.png" alt=""/>
                      </div>
                      <div className="our-best-card__name">
                          AROMISTICO Coffee 1 kg
                      </div>
                      <div className="our-best-card__price">
                          6.99$
                      </div>
                  </a> */}
              </div>
          </div>
      </div>
  </div>
  )
}