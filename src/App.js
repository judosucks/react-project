import Header from "./component/Header";
import Route from "./component/Route";
import AboutPage from "./pages/AboutPage";
import NewsPage from "./pages/NewsPage";
import DocPage from "./pages/DocPage";
import ShopPage from "./pages/ServicePage";

import { LinksProvider } from "./provider/links-provider";
function App() {
    


    return (
        <div className="">
            
            <LinksProvider>
            <Header/>
         
            </LinksProvider>
                <Route path="/news"><NewsPage/></Route>
                <Route path="/about"><AboutPage/></Route>
                <Route path="/shop"><ShopPage/></Route>
                <Route path="/documentation"><DocPage/></Route>
                
            
        </div>
    )
}
export default App;