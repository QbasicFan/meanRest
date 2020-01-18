{% load staticfiles %}
class MenuList extends React.Component {

    constructor(){
        super()
        this.state = {

        cardList: [{name: 'd', age : 7},{name: 'd', age : 7}],
        j : 4,
        menuList: [
            {name:"Steak", cal:15, img: "{% static "img/food/steak.png" %}"},
            {name:"m1", cal:15, img: "{% static "img/food/steak.png" %}"},
            {name:"m2", cal:15, img: "{% static "img/food/steak.png" %}"},
            {name:"m3", cal:15, img: "{% static "img/food/steak.png" %}"},
            {name:"m3", cal:15, img: "{% static "img/food/steak.png" %}"},
        ],

        name: [],
        img: [],
        cal: 0,
        count: 0,
        childTest: 0

        }
     this.counter = this.counter.bind(this);
     this.onSendData = this.onSendData.bind(this);
     this.updateCardList = this.updateCardList.bind(this);
     this.delete = this.delete.bind(this);

    };

   delete(x){


this.setState({
    j: x,
    name: this.name.splice(x, 1)

})


}


updateCardList(w){

  let cardList = Object.assign({}, prevState.cardList);  // creating copy of state variable jasper
  cardList.name = w;                     // update the name property, assign a new value
  return { cardList };
};


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
            {name:"Steak", cal:68, img: "{% static "img/food/steak.png" %}"},
            {name:"Sausage", cal:15, img: "{% static "img/food/sausage.jpg" %}"},
            {name:"Sate", cal:15, img: "{% static "img/food/sate.jpg" %}"},
            {name:"Pop-corn", cal:15, img: "{% static "img/food/pop-corn.jpg" %}"},
            {name:"Pie", cal:105, img: "{% static "img/food/pie.jpg" %}"},
            {name:"Noodle", cal:105, img: "{% static "img/food/noodle.png" %}"},
            {name:"Mushroom", cal:105, img: "{% static "img/food/mushroom.png" %}"},
            {name:"Milk", cal:105, img: "{% static "img/food/milk.png" %}"},
            {name:"Fries", cal:105, img: "{% static "img/food/fries.png" %}"},
            {name:"fried-chicken", cal:105, img: "{% static "img/food/fried-chicken.jpg" %}"},
            {name:"Fish", cal:105, img: "{% static "img/food/fish.png" %}"},
            {name:"Donut", cal:105, img: "{% static "img/food/donut.jpg" %}"},
            {name:"Croissant", cal:105, img: "{% static "img/food/croissant.jpg" %}"},
            {name:"Coffe", cal:105, img: "{% static "img/food/coffe.png" %}"},
            {name:"Chocolate", cal:105, img: "{% static "img/food/chocolate.jpg" %}"},
            {name:"Cake", cal:105, img: "{% static "img/food/cake.jpg" %}"},
            {name:"Burger", cal:105, img: "{% static "img/food/burger.png" %}"},
            {name:"Bread", cal:105, img: "{% static "img/food/bread.png" %}"},
            {name:"Apple", cal:105, img: "{% static "img/food/apple.jpg" %}"},

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

<h1>Menu Compoment</h1>
<br />
<div class="w3-row-padding w3-padding-16 w3-center">
{listItems}
</div>


<hr/>

<div class="w3-row">
<div class="w3-half">
<Track count={this.state.childTest}/>


</div>
<div class="w3-half">
<ul class="w3-ul w3-card-4"> {final} </ul>
</div>
</div>

 </span>
}
}
