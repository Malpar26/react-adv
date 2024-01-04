import { useEffect, useRef, useState } from 'react'
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces'

interface UseProductArgs {
  product: Product
  onChange?: ( args: OnChangeArgs ) => void
  value?: number
  initialValues?: InitialValues
  maxCount?: number
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: UseProductArgs ) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) return

    setCounter(initialValues?.count|| value)
  }, [initialValues, value])

  useEffect(() => {
    isMounted.current = true
  }, [])
  
  const increaseBy = (value: number) => {
    let newValue = Math.max( counter + value, 0 )

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount)
    }

    // if (initialValues?.maxCount && counter + value > initialValues?.maxCount) return

    setCounter( newValue )

    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset
  }
}