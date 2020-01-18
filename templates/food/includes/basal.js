{% load staticfiles %}

class Basal extends React.Component {

    constructor(){
        super()
        this.state = {

        count: 0,
        isActive: true,
        del: '',

        gender: 'female',
        hei: 0,
        wei: 0,
        age: 50,
        act: 2,

        basalCal : 0

        }
     this.add = this.add.bind(this);
     this.dec = this.dec.bind(this);
     this.setBasal = this.setBasal.bind(this);
     this.setGender = this.setGender.bind(this);
     this.setAll = this.setAll.bind(this);

    };

setAll(){
        this.setState({hei: this.props.heigth})
        this.setState({wei: this.props.weight})

}

 add(n){

this.setBasal()

    if (n === 'hp'){

        this.setState(prevState => {return {hei: prevState.hei + 1,}})
        this.props.h(this.state.hei)
    }
    else if (n === 'wp'){
        this.setState(prevState => {return {wei: prevState.wei + 1,}})
        this.props.w(this.state.wei)
    }

    else if (n === 'agp')
        this.setState(prevState => {return {age: prevState.age + 1,}})

    else if (n === 'ap')
        this.setState(prevState => {return {act: prevState.act + 1,}})

 };

 dec(n){

this.setBasal()

    if (n === 'hd'){
        this.setState(prevState => {return {hei: prevState.hei - 1,}})
        this.props.h(this.state.hei)
    }
    else if (n === 'wd'){
        this.setState(prevState => {return {wei: prevState.wei - 1,}})
        this.props.w(this.state.wei)
    }

    else if (n === 'agd')
        this.setState(prevState => {return {age: prevState.age - 1,}})

    else if (n === 'ad')
        this.setState(prevState => {return {act: prevState.act - 1,}})


};


setBasal(){

const mut = 2;




    this.setState((state, props) => {
      return {basalCal: (this.state.hei * this.state.age)+(this.state.wei * this.state.act * mut)};
    });

};

setGender(g){

    this.setState((state, props) => {
      return {gender: g};
    });

};





render() {



 return <span>

<div calssName="w3-container">

  <table class="w3-table w3-striped w3-border">
    <tr>
      <th>Name</th>
      <th>Value</th>
      <th>Function</th>
    </tr>

<tr>
      <td>Gender</td>
      <td>{this.state.gender}</td>
      <td>
        <img onClick={() => this.setGender('female')} src="{% static "img/food/gender/femlale.png" %}" className="w3-hover-pink" />
        <img onClick={() => this.setGender('male')} src="{% static "img/food/gender/male.png" %}" className="w3-hover-blue" />
        <img onClick={() => this.setGender('crossdresser')} src="{% static "img/food/gender/crossdresser.png" %}" className="w3-hover-purple" />
        <img onClick={() => this.setGender('trans')} src="{% static "img/food/gender/trans.png" %}" className="w3-hover-teal" />



    </td>
</tr>

<tr>
      <td>Heigth</td>
      <td>{this.state.hei}</td>
      <td>
        <button onClick={() => this.add('hp')}>[ + ]</button>
        <button onClick={() => this.dec('hd')}>[ - ]</button>
      </td>
</tr>

<tr>
      <td>Weight</td>
      <td>{this.state.wei}</td>
      <td>
       <button onClick={() => this.add('wp')}>[ + ]</button>
       <button onClick={() => this.dec('wd')}>[ - ]</button>
      </td>
</tr>

<tr>
      <td>Age</td>
      <td>{this.state.age}</td>
      <td>
       <button onClick={() => this.add('agp')}>[ + ]</button>
       <button onClick={() => this.dec('agd')}>[ - ]</button>
      </td>
</tr>

<tr>
      <td>Activity</td>
      <td>{this.state.act}</td>
      <td>
       <button onClick={() => this.add('ap')}>[ + ]</button>
       <button onClick={() => this.dec('ad')}>[ - ]</button>
      </td>
</tr>
      </table>

</div>

<div className="w3-center">

<h1> Your results are : {this.state.basalCal} calories </h1>

</div>




 </span>
}
}
