import React from 'react'
class Display extends React.Component {
    state = {num: "", finalResult:  ""}
    set =val=> {
        let {num} = this.state;
        num += val;
        this.setState({num})
    }
    render() {
        return <>
            <center>
                <div>
                <input defaultValue = {this.state.num}  /> 
                <input defaultValue = {this.state.finalResult} />

                <button onClick={()=> this.set(1)}> 1 </button>
                <button onClick={()=> this.set(2)}> 2 </button>
                <button onClick={()=> this.set(3)}> 3 </button>
                <button onClick={()=> this.set("*")}>*</button>
                <button onClick={()=> this.set(4)}> 4 </button>
                <button onClick={()=> this.set(5)}> 5 </button>
                <button onClick={()=> this.set(6)}> 6 </button>
                <button onClick={()=> this.set("+")}>+</button>
                <button onClick={()=> this.set(7)}> 7 </button>
                <button onClick={()=> this.set(8)}> 8 </button>
                <button onClick={()=> this.set(9)}> 9 </button>
                <button onClick={()=> this.set("-")}>-</button>
                <button onClick={()=> this.set(0)}> 0 </button>
                <button onClick={()=> this.set(".")}>.</button>
                <button onClick={()=> this.setState({finalResult: eval(this.state.num)})}>=</button>
                <button onClick={()=> this.set("/")}>/</button>
                <button onClick={()=> this.setState({num: this.state.num.slice(0, -1)})}>Del</button>
                <button onClick={()=> this.setState({result: "", finalResult: ""})}>CE</button>
                </div>
            </center>
        </>
    };
};

export default Display;