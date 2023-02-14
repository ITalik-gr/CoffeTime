
import './App.css';

import { Header } from './components/header/header';
import { AboutBlock } from './components/about/about';
import { OurBestBlock } from './components/our_best/our_best';
import { Footer } from './components/footer/footer';

function App() {

  const pages = [
    {name: 'Our coffee', link: './pages/our-coffe.js'},
    {name: 'For your pleasure', link: 'https://google.com'},
  ]
  const ourBestCards = [
    {image: 'img/coffe_item_main_1.png', name: 'Solimo Coffee Beans 2 kg', price: 10.73, link: 'https://google.com'},
    {image: 'img/coffe_item_main_2.png', name: 'Presto Coffee Beans 1 kg', price: 15.99, link: 'https://google.com'},
    {image: 'img/coffe_item_main_3.png', name: ' AROMISTICO Coffee 1 kg', price: 6.99, link: 'https://google.com'},
  ]

  return (
   <>
    <Header  pages={pages} ></Header>
    <AboutBlock/>
    <OurBestBlock ourBestCards={ourBestCards} />
    <Footer pages={pages} />
   </>
  );
}

export default App;
