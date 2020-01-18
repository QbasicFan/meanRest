{% load staticfiles %}

class Acti extends React.Component {

    constructor(){
        super()
        this.state = {

        cardList: [{name: 'd', age : 7},{name: 'd', age : 7}],
        j : 4,
        name: [],
        img: [],
        cal: 0,
        childTest: 0,

        count: 0
        }
     this.counter = this.counter.bind(this);
     this.onSendData = this.onSendData.bind(this);
     this.delete = this.delete.bind(this);
    };

delete(x){
his.setState({
    j: x,
    name: this.name.splice(x, 1)
})
}


 counter(n, im, c){
    this.setState(prevState => {
        return {
            count: prevState.count + 1,
            name: [ ...this.state.name, n],
            img: [ ...this.state.img, im],
            cal: [ ...this.state.cal, c],

        }
    })
            this.name.push('ok')
            this.img.push('boi')
};




onSendData(n){
  this.setState(prevState => {
      return {
  childTest: prevState.childTest + n,
            }
  })

};

render() {


  const final = [];
  for (let  i = 0 ; i < this.state.count ;i++) {
    final.push(<Card name={this.state.name[i]} im={this.state.img[i]} co={this.onSendData} cal={this.state.cal[i]} delete={this.delete.bind(this)}/>);

  };


const finalImg = [
            {name:"Bike", cal:68, img: "{% static "img/food/acti/bike.jpg" %}"},
            {name:"Chore", cal:15, img: "{% static "img/food/acti/chores.jpg" %}"},
            {name:"Contrustion", cal:15, img: "{% static "img/food/acti/contrustion.jpg" %}"},
            {name:"Dog Walking", cal:15, img: "{% static "img/food/acti/dogWalking.jpg" %}"},
            {name:"Fitness", cal:105, img: "{% static "img/food/acti/fitness.jpg" %}"},
            {name:"Lift", cal:105, img: "{% static "img/food/acti/lift.jpg" %}"},
            {name:"Moving", cal:105, img: "{% static "img/food/acti/moving.jpg" %}"},
            {name:"Rope", cal:105, img: "{% static "img/food/acti/rope.jpg" %}"},
            {name:"Running", cal:105, img: "{% static "img/food/acti/running.jpg" %}"},
            {name:"Sitting", cal:105, img: "{% static "img/food/acti/sitting.jpg" %}"},
            {name:"Tennis", cal:105, img: "{% static "img/food/acti/tennis.jpg" %}"},
            {name:"Yoga", cal:105, img: "{% static "img/food/acti/yoga.jpg" %}"},
        ];

    const listItems = finalImg.map((link) =>
        <span className="w3-third" onClick={() => this.counter(link.name,link.img,link.cal) } >
            <div className="w3-row">

                <div className="w3-third">
                    <img src={link.img} />
                </div>

                <div className="w3-twothird">
                    <b>Name:</b> {link.name} <br /> <b>cal :</b> {link.cal}
                </div>

            </div>
        </span>
    );



 return <span>
<h1>Acti works!</h1>

<div class="w3-row-padding w3-padding-16 w3-center">
{listItems}
</div>




<div class="w3-row">
<div class="w3-half">
<Track co={() => this.onSendData(this.props.co)} count={this.state.childTest}/>

</div>
<div class="w3-half">
<ul class="w3-ul w3-card-4"> {final} </ul>
</div>
</div>

 </span>
}
}
