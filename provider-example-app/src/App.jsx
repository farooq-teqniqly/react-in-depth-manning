import './App.css'
import {MainView} from "./MainView.jsx";
import {DarkModeProvider} from "./DarkModeProvider.jsx";

function App() {


  return (
        <DarkModeProvider>
            <MainView></MainView>
        </DarkModeProvider>
  )
}

export default App
