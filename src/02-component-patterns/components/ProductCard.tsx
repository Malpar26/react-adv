import { CSSProperties, ReactElement, createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'

import { ProductContextProps, Product } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export interface Props {
  product: Product
  children?: ReactElement | ReactElement[]
  className?: string
  style?: CSSProperties
}

export function ProductCard({children, product, className, style}: Props) {
  const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
      product,
      counter,
      increaseBy
    }}>
      <div 
        className={`${styles.productCard} ${className}`}
        style={style}
      >

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
