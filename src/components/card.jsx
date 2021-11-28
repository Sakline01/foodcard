import './card.css'
import Poster from "./postar";
import Heading from "./heading";
import Content from "./main";
import Detail from "./details";
import PriceAndBtn from "./price"
function Card() {
    return (
        <div className='card_holder'>

        <Poster/>
        <Heading/>
        <Content/>
        <Detail/>
        <PriceAndBtn/>
        </div>
  
      );
}

export default Card;