import React from "react";
import { csv } from "d3-fetch";

const App = () => {
    csv("https://raw.githubusercontent.com/coei26/info474-react-parcel-example/main/execution_data.csv")
        .then(data => console.log(data))
    return (
        <div>
            <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
            <p>Data</p>
        </div>
    )
};

export default App;