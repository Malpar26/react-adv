import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export function ProductCard({children, product}: ProductCardProps) {
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div className={styles.productCard}>

        {children}

        {/* <ProductImage img={product.img} />

        <ProductTitle title={product.title} />

        <ProductButtons 
          counter={counter} 
          increaseBy={increaseBy} 
        /> */}
        
      </div>
    </Provider>
  )
}
