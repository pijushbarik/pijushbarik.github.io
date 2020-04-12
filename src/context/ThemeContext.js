import React from "react"

const defaultState = {
  isDarkMode: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = props => {
  const [isDarkMode, setDarkMode] = React.useState(false)

  const toggleDark = () => {
    console.log("i have been called")
    const darkMode = !isDarkMode
    // Save to local storage for future requirements
    localStorage.setItem("dark_mode", JSON.stringify(darkMode))
    setDarkMode(darkMode)
    console.log("changed mode to dark", isDarkMode)
  }

  React.useEffect(() => {
    // Dar mode setting from local storage
    const isDark = JSON.parse(localStorage.getItem("dark_mode"))

    if (isDark) {
      setDarkMode(isDark)
    } else {
      setDarkMode(false)
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
