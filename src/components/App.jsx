import '../App.scss'
import Sidebar from "./Sidebar.jsx";
import InnerContext from './InnerContext';


const App = () => {
  return (
    <div>
      <Sidebar />
      <InnerContext></InnerContext>
    </div>
  )
}

export default App
