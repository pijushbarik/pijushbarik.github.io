import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState()

  useEffect(() => {
    const item = window.localStorage.getItem(key)
    setStoredValue(item ? JSON.parse(item) : initialValue)
  }, [key, initialValue])

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
