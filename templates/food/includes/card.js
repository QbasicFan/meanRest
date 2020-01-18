class Card extends React.Component {


    constructor(){
        super()
        this.state = {

        count: 0,
        isActive: true,
        del: ''

        }
     this.add = this.add.bind(this);
     this.dec = this.dec.bind(this);
     this.delete = this.delete.bind(this);

    };

 delete(n){
this.setState({del: 'hideMyAss'})

this.props.delete(n)
};


 add(n){
    this.setState(prevState => {
        return {count: prevState.count + 1,}
    })
this.props.co(n)
};

 dec(n){

 if (this.state.count < 1){
        this.setState({del: 'hideMyAss'})
        this.props.co(n)
    }

    this.setState(prevState => {
        return {count: prevState.count - 1}
    })



this.props.co(-n)
};



render() {



 return <span className={this.state.del}>



<li className="w3-bar" >


<h1>{this.props.name}</h1>
<h3>Contains : {this.props.cal}</h3>
<br />
      <img src={this.props.im} className="w3-bar-item w3-circle w3-hide-small" />

 <br/>
 <h2> {this.state.count}</h2>
 <br/>
 <button onClick={() => this.add(this.props.cal)}>[ + ]</button>
 <button onClick={() => this.dec(this.props.cal)}>[ - ]</button>
<button onClick={() => this.props.delete(this.props.name)}>Delete</button>
</li>

 </span>
}
}
