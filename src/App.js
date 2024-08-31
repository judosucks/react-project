import Header from "./component/Header";
import Route from "./component/Route";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import ServicePage from "./pages/ServicePage";
import DocPage from "./pages/DocPage";
function App() {
    return (
        <div className="">
            
            <div className="">
            <Header/>
                <Route path="/news"><NewsPage/></Route>
                <Route path="/about"><AboutPage/></Route>
                {/* <Route path="/services"><ServicePage/></Route> */}
                <Route path="/documentation"><DocPage/></Route>
                
            </div>
        </div>
    )
}
export default App;