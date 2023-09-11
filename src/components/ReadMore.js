import UserClass from "./UserClass";
import { useState } from "react";

const ReadMore = () => {
const [count] = useState(0);
const [count2] = useState(1);

    return(
        <div className="components">
            <h1>using function component</h1>
            <h2>count: {count}</h2>
            <h3>count2 : {count2}</h3>
            <UserClass name = {"using class component props"}/>
        </div>
    );
};

export default ReadMore;