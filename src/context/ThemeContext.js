import React from "react"

const defaultState = {
  isDarkMode: true,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = props => {
  const [isDarkMode, setDarkMode] = React.useState(true)

  const toggleDark = () => {
    const darkMode = !isDarkMode
    // Save to local storage for future requirements
    localStorage.setItem("dark_mode", JSON.stringify(darkMode))
    setDarkMode(darkMode)
  }

  React.useEffect(() => {
    // Dark mode setting from local storage
    const isDark = JSON.parse(localStorage.getItem("dark_mode"))

    if (isDark !== null) {
      setDarkMode(isDark)
    } else {
      setDarkMode(true)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDark }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }
