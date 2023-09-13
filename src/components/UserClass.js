import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            count :0,
            count2 : 1,
            userInfo: {
                login : "dummy",
            },
        };
    };

    async componentDidMount () {

        const data = await fetch("https://api.github.com/users/prakashreddy000");
        const json = await data.json();
         
       

        this.setState({
            userInfo:json,
        });
    }
   

    render(){
        const {login} = this.state.userInfo;
        const {count, count2} = this.state;
        return(
            <div  className="components">
                <h1>{login}</h1>
                <h2>count: {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}
                
                >increase count</button>
                <h3>count2: {count2}</h3>
                <h3>using class component</h3>
            </div>

        )
    };
};

export default UserClass;