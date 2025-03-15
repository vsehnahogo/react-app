import './product.css';
import Image from '../../media/image.png'
function Product(){
    return(
        <div className='Product'>
            <img src={Image}></img>
            <div className='name'>
            It takes two
            </div>
            <div className='type'>
            Платформер, Приключение
            </div>
            <div className='price'>
                3999₽
            </div>
        </div>
        
    )
}
export default Product;