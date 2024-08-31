import Header from "./component/Header";
import Route from "./component/Route";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
function App() {
    return (
        <div className="">
            
            <div className="">
            <Header/>
                <Route path="/"><HomePage/></Route>
                <Route path="/about"><AboutPage/></Route>
                <Route path="/service"><ServicePage/></Route>
                <Route path="/contact"><ContactPage/></Route>
                
            </div>
        </div>
    )
}
export default App;