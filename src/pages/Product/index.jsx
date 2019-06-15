import React, { useState } from 'react'
import './Product.css'
import products from '../../constants/products'
import QuantitySelector from '../../components/QuantitySelector'
import { connect } from 'react-redux'
import { addItemToBag } from '../../actions'
import { Link } from 'react-router-dom'

const availableSize = ['4', '5', '6', '7', '8']

const Product = props => {
  const [size, setSize] = useState()
  const [quantity, setQuantity] = useState(1)
  const onClickSize = e => setSize(e.target.dataset.size)
  const onChangeQuantity = e => setQuantity(e.target.value)
  const onSubmit = () => {
    props.addItemToBag({
      quantity,
      size,
      product,
      id: Math.random()
        .toString(26)
        .slice(2),
    })
    setSize(undefined)
    setQuantity(1)
  }
  const { id } = props.match.params
  const product = products.find(elem => elem.id === id)

  return (
    <>
      <div className='product-container'>
        {product.img && <img src={product.img} alt={product.description} />}
        <div className='product-content'>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          {availableSize.map(value => (
            <button
              key={value}
              onClick={onClickSize}
              data-size={value}
              className={`size${size === value ? ' active' : ''}`}
            >
              Size {value}
            </button>
          ))}
          <QuantitySelector
            id={'number-items'}
            label={`Quantity of ${product.name}:`}
            max={product.max}
            value={quantity}
            onChange={onChangeQuantity}
          />
          <div className='add-container'>
            <button
              className='add-item'
              to='/shoppingBag'
              onClick={onSubmit}
              disabled={!size}
            >
              add to shopping bag
            </button>
          </div>
          <ul className='shippingList'>
            {(product.shippingDescription || []).map(description => (
              <li key={description} className='shipping-description'>
                {description}
              </li>
            ))}
          </ul>
          <div className='button-container'>
            <Link to='/products'>
              <button className='backButton'>Back</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='product-container-two'>{product.details}</div>
    </>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  addItemToBag: addItemToBag(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product)
