import ControlPanel from "./Pages/ControlPage";
import Bottombar from './components/Bottombar'

function App() {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <ControlPanel />
      
      {/* <Bottombar /> */}
    </div>
  );
}
//Send to Money
export default App;