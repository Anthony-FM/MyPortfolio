// configureStore @reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

import myPortefolioFeatures from "../../feature/myPortefolioFeatures";
import myIntersectionObserver from "../../feature/myIntersectionObserver";

export default configureStore({
    reducer: {
        myPortefolioFeatures: myPortefolioFeatures,
        myIntersectionObserver: myIntersectionObserver
    }
})