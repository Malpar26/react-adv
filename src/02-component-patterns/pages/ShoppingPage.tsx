import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/products'

export function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {/* <ProductCard 
          product={product1}
          className='bg-dark text-white'
          >
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title title={'Taza café'} className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard 
          product={product1}
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image' style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }} />
          <ProductTitle className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard 
          product={product2}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }} />
          <ProductTitle style={{
            fontWeight: 'bold'
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard> */}

        {products.map((product) => (
          <ProductCard
            product={product}
            className='bg-dark text-white'
            key={product.id}
            value={shoppingCart[product.id]?.count || 0}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
