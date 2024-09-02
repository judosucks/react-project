import { useContext } from "react";
import LinksContext from "../provider/links-provider";

function useLinksContext(){
    return useContext(LinksContext);  // returns the context object
}

export default useLinksContext;