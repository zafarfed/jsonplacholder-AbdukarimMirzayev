import './App.css'
import MainPage from "./Pages/MainPage";
import {Routes,Route} from "react-router-dom";
import Header from "./Pages/Header/Header";
import Talabalar from "./Pages/Talabalar/Talabalar";
import Postlar from "./Pages/Postlar/Postlar";
import Sharhlar from "./Pages/Sharhlar/Sharhlar";


function App() {
  return (
    <div className="App">
        <div className="col-md-12 mainHeader p-3">
            <Header/>
        </div>
        <div className={'p-4'}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/talabalar'} element={<Talabalar/>}/>
                <Route path={'/postlar'} element={<Postlar/>}/>
                <Route path={'/sharhlar'} element={<Sharhlar/>}/>
            </Routes>
        </div>
    </div>
  );
}export default App;