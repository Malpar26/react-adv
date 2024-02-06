import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import { products } from '../data/products'

const product = products[0]

export function ShoppingPage() {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          // maxCount: 10
        }}
      >
        {
          ({isMaxCountReached, reset, increaseBy}) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

              {/* <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>
              {
                !isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>
              } */}
            </>
          )
        }
      </ProductCard> 
    </div>
  )
}
