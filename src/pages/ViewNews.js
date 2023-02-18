import React from "react";
import { FooterBar, NavigationBar, ShowNews } from "../components/index.component";

function ViewNews() {
    return (
        <div>
        <NavigationBar />
        <ShowNews/>
        <FooterBar />
        </div>
    );
}

export default ViewNews;
