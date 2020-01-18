class Pile extends React.Component {

    constructor(){
        super()
        this.state = {
        count: 1

        }
     this.counter = this.counter.bind(this);
    };
 counter(){
    this.setState(prevState => {
        return {count: prevState.count + 1}
    })
this.count
};




render() {


  const final = [];
  for (let  i = 0 ; i < this.props.ctr ;i++) {
    final.push(<div class="w3-third w3-teal w3-hover-sand"><Card im="https://i.ytimg.com/vi/be34mkxpbr0/hqdefault.jpg" submitCount = {this.state.count}/></div>);
    }

 return <span>
<div class="w3-row-padding w3-padding-16 w3-center">
<ul>{final}</ul>
 <button onClick={this.counter} className="w3-btn w3-center w3-blue">(+)</button>
</div>

 </span>
}
}
