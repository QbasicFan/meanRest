class Secrete extends React.Component {

    constructor(){
        super()
        this.state = {
        done: false,
        count: 1

        }
     this.counter = this.counter.bind(this);
     this.setDone = this.setDone.bind(this);
     this.setFalse = this.setFalse.bind(this);


    };
 counter(){
    this.setState(prevState => {
        return {count: prevState.count + 1}
    })
this.count
};

setDone (){
    this.setState({done: false})

};
setFalse (){
    this.setState(prevState => {
        return {done: true}
    })
};


render() {

const finalImg = [
            {text:"Soline Chantal f", done:false},
            {text:"Soline Chantal f", done:false},
            {text:"Soline Chantal t", done:true},
            {text:"Soline Chantal t", done:true},
            {text:"Soline Chantal t", done:true},

            ]

    const listItemsF = finalImg
                      .filter(function (link) {return !link.done;})
                      .map((link) =>
        <li className="w3-text-pink" onClick={this.setDone}>
    {link.text} ...
    {link.done}
        </li>
    );

    const listItemsT = finalImg
                      .filter(function (link) {return link.done;})
                      .map((link) =>
        <li className="w3-text-blue" onClick={this.setFalse}>
    {link.text} ...
    {link.done}
        </li>
    );



 return <span>
<div class="w3-row-padding w3-padding-16 w3-center">
<h2>Todo list {this.state.count}</h2>
    <ul>Not done yet
    {listItemsF}
    </ul>
    <ul>Done
    {listItemsT}
    </ul>

</div>

 </span>
}
}
