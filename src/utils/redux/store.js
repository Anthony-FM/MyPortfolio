// configureStore @reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

import myPortefolioFeatures from "../../feature/myPortefolioFeatures";

export default configureStore({
    reducer: {
        myPortefolioFeatures: myPortefolioFeatures
    }
})