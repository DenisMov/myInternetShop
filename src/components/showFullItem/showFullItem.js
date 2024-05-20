
import './showFullItem.scss'
import buttonImg from '../../resources/img/Button.png'
import { IoIosClose } from "react-icons/io";


const showFullItem = ({item, onAdd, onShowItem}) => {
    return (
        <div className="full-item">
            <div>
                <li className="fullItem__item">
                    <IoIosClose onClick={() => onShowItem(item)} className="fullItem__close"/>
                    <div className="fullItem__block">
                        <img src={"./img/" + item.img} alt="photo" onClick={() => onShowItem(item)}/>
                    </div>
                    <div className="fullItem__name">{item.title}</div>
                    <div className="fullItem__info">{item.category}</div>
                    <div className='fullItem__buying'>
                        <div className="fullItem__price">$ {item.price}</div>
                        <div className='fullItem__buttonImg' onClick={() => onAdd(item)}>
                            <img src={buttonImg} alt="ph" />
                        </div>
                    </div>
                </li> 
            </div>
        </div>
    )
}
export default showFullItem;


