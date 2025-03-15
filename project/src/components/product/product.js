import './product.css';
import Image from '../../media/image.png';



function Product(props) {
    return (
        <div className='Product'>
            <img src={Image} alt={props.product.name}></img>
            <div className='name'>
                {props.product.name}
            </div>
            <div className='type'>
                {props.product.type}
            </div>
            <div className='price'>
                {props.product.price}
            </div>
            
        </div>
    );
}

export default Product;
