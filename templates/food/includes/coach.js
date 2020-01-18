class Coach extends React.Component {

    constructor(){
        super()
        this.state = {


        weight: 90,
        heigth: 180,
        bmi: 30,
        gender: 'male',
        cmpH: 80,
        cmpW: 150,


        count: 1

        }
     this.counter = this.counter.bind(this);
     this.setFilter = this.setFilter.bind(this);

    };
 counter(){
    this.setState(prevState => {
        return {count: prevState.count + 1}
    })
this.count
};

setFilter(w,h){
        this.setState(prevState => {
        return {
            cmpW: w,
            cmpH: h
        }
    })
}


render() {

const h = this.state.cmpH , w=this.state.cmpW;

const finalImg = [
            {name:"Soline Chantal", height:68, weigth:55 , bmi:20, img: "https://66.media.tumblr.com/b4241d9b1965431f12eb27e56de42ff6/tumblr_n8hqauqiS61ruy5opo1_1280.jpg"},
            {name:"Sixtine Amandine", height:190, weigth:55 , bmi:20, img: "https://66.media.tumblr.com/fbd8d4fb3c43825d9b0c49321658f6b4/tumblr_n8hqauqiS61ruy5opo8_1280.jpg"},
            {name:"Marjolaine Anaëlle", height:68, weigth:55 , bmi:20, img: "https://66.media.tumblr.com/b4241d9b1965431f12eb27e56de42ff6/tumblr_n8hqauqiS61ruy5opo1_1280.jpg"},
            {name:"Jocelyne Marie", height:68, weigth:55 , bmi:20, img: "https://ww1.prweb.com/prfiles/2014/01/28/11498786/LA%202014%20RUNWAY0866.JPG"},
            {name:"Muriel Daphnée", height:168, weigth:55 , bmi:20, img: "https://us.hellomagazine.com/images/stories/1/2016/02/02/000/127/296/gallery_3_5.jpg"},
            {name:"Carine Mireille", height:68, weigth:55 , bmi:20, img: "https://i.mdel.net/rankings/Top50M/i/955132800w.jpg"},
            {name:"Carine Mireille", height:68, weigth:55 , bmi:20, img: "https://res.cloudinary.com/next-management/image/upload/c_fill,f_auto,g_north,h_628,q_auto:best,w_471/v1/photos/ajwhycdu3f1tparrprmc"},
            {name:"Soline Chantal", height:168, weigth:55 , bmi:20, img: "https://www.malemodelscene.net/wp-content/uploads/2013/05/Jin-Dachuan-GQ-China-Yu-Cong-05.jpg"},
            {name:"Soline Chantal", height:68, weigth:55 , bmi:20, img: "hhttps://images.summitmedia-digital.com/esquiremagph/images/2018/12/04/JORDAN-BARETT_1_DEC2018.jpg"},
            {name:"Soline Chantal", height:68, weigth:55 , bmi:20, img: "https://www.thefashionisto.com/wp-content/uploads/2019/08/Salomon-Diaz-2019-Bergdorf-Goodman-005.jpg"},
            {name:"Soline Chantal", height:168, weigth:155 , bmi:20, img: "https://mediaslide-europe.storage.googleapis.com/premier/pictures/2548/4225/large-1548344602-d3648ee950c0cd9c1a709c68adee3dd1.jpg"},
            {name:"Soline Chantal", height:68, weigth:55 , bmi:20, img: "https://i.theones2watch.com/wp-content/latest/2016/11/1_thumb.jpg"},
            {name:"Soline Chantal", height:168, weigth:55 , bmi:20, img: "https://i.mdel.net/newfaces/i/2010/03/MilesFrank29.jpg"},
            {name:"Soline Chantal", height:268, weigth:155 , bmi:20, img: "https://i.pinimg.com/originals/d4/41/cb/d441cbb3c7f83d53a8543f96bae5f252.jpgg"},
        ];

    const listItems = finalImg
                        .filter(function (link) {return link.height > h;})
                        .filter(function (link) {return link.weigth > w;})



                        .map((link) =>
        <span className="w3-third" >
            <div className="w3-card-4 w3-margin w3-center">

                <div className="w3-container w3-margin-bottom w3-center">
                    <h2> {link.name} <i class="fa fa-flask" aria-hidden="true"></i><i class="fa fa-smile-o" aria-hidden="true"></i></h2>
                </div>
                    <img  className="imgResp" src={link.img} alt="Alps"/>
  <div className="w3-container w3-margin-bottom w3-center">
    <p>Height: {link.height} cm</p>
    <p>Weigth: {link.weigth} kg</p>
    <p>BMI: {link.bmi} </p>
  </div>

            </div>
        </span>

    );

 return <span>

 <div className="w3-center">
 <h1>Men like me ...</h1>
 </div>

  <button onClick={() => this.setFilter(1,1)} className="w3-btn w3-center w3-blue">All</button>
  <button onClick={() => this.setFilter(this.props.w,this.props.h)} className="w3-btn w3-center w3-blue">Against me</button>

<h1>{this.props.w} , {this.props.h}</h1>


<div className="w3-row">


{listItems}

</div>


 </span>
}
}
