{% verbatim %}
class BmiCalc extends React.Component {

    constructor(){
        super()
        this.state = {
            weight: 100,
            idealWeight: 120,
            averageWeight: 150,
            maxWeight: 100,

            heigth: 180,
            logged : true,
            bmi:0,
            meal: ["pasta","burger"]


        }
        this.moreWeight = this.moreWeight.bind(this);
        this.lessWeight = this.lessWeight.bind(this);
        this.moreHeigth = this.moreHeigth.bind(this);
        this.lessHeigth = this.lessHeigth.bind(this);

        this.setWeight = this.setWeight.bind(this);


        this.onBMI = this.onBMI.bind(this);

    };


 moreWeight(){
    this.setState(prevState => {
        return {weight: prevState.weight + 1}
    })
    this.onBMI
};

 lessWeight(){
    this.setState(prevState => {
        return {weight: prevState.weight - 1}
    })
};

 moreHeigth(){
    this.setState(prevState => {
        return {heigth: prevState.heigth + 1}
    })
    this.onBMI
};

 lessHeigth(){
    this.setState(prevState => {
        return {heigth: prevState.heigth - 1}
    })
};



 setWeight(w){
    this.setState({weight: w})
};



onBMI(w,h){

        this.setState(prevState => {


        this.setState({idealWeight: 19*((h/100) *(h/100))})
        this.setState({maxWeight: 24*((h/100) *(h/100))})
        this.setState({averageWeight: 22*((h/100) *(h/100))})

        return {bmi: ((w / ((h/100) *(h/100))).toFixed(3))}
        })
}



  render() {
    return <h1>
    Your weight is <b>{this.state.weight} kg</b>, your height is <b>{this.state.heigth} cm</b>. Your Imc is <b>{ this.state.bmi }</b>
    <hr/>
    <div className="row">
    <div className="col-1-of-2">
    <span>Weight : </span>
    <button onClick={this.moreWeight} className="text-center u-margin-top-big btn btn--blue">(+)</button>
    <button onClick={this.lessWeight} className="text-center u-margin-top-big btn btn--blue">(-)</button>
    </div>
    <div className="col-1-of-2">
    <img src= "https://i.ytimg.com/vi/sTX8qbOtPN8/hqdefault.jpg"/>
    </div>
    </div>

    <br/>

    <div className="row">

    <div className="col-1-of-2">
    <img src= "https://i.ytimg.com/vi/sTX8qbOtPN8/hqdefault.jpg"/>
    </div>

    <div className="col-1-of-2">
    <span>Heigth : </span>
    <button onClick={this.moreHeigth} className="text-center u-margin-top-big btn btn--blue">(+)</button>
    <button onClick={this.lessHeigth} className="text-center u-margin-top-big btn btn--blue">(-)</button>
    </div>
    </div>


    <br/>
    <div className="row">
    <div className="col-1-of-2">
    <span>Set Max healthy weight : </span>
    <button onClick={() => this.setWeight(this.state.maxWeight)} className="text-center u-margin-top-big btn btn--blue">({this.state.maxWeight})</button>
    <br/>
    <span>Set Min healthy weight : </span>
    <button onClick={() => this.setWeight(this.state.idealWeight)} className="text-center u-margin-top-big btn btn--blue">({this.state.idealWeight})</button>
    <br/>
    <span>Set Average healthy weight : </span>
    <button onClick={() => this.setWeight(this.state.averageWeight)} className="text-center u-margin-top-big btn btn--blue">({this.state.averageWeight})</button>
    </div>
    <div className="col-1-of-2">
    <img src= "https://i.ytimg.com/vi/sTX8qbOtPN8/hqdefault.jpg"/>
    </div>

    </div>
    <br/>
    <button onClick={() => this.onBMI(this.state.weight,this.state.heigth)}  className="text-center u-margin-top-big btn btn--blue">BMI</button>
    <hr/>
<p>            {this.state.meal}</p>
<br/>
    <div className="row">
<div className="col-1-of-3">
    <Card
    id = "0"
    type="lowest"
    submitWeight = {this.state.weight}
    submitHeigth = {this.state.heigth}

    submitBMI = {this.state.bmi}
    submitIdeal = {this.state.idealWeight}
    submitMax = {this.state.maxWeight}
    submitAve = {this.state.averageWeight}

    />
</div>

<div className="col-1-of-3">
    <Card
    id = "1"
    type="average"

    submitWeight = {this.state.weight}
    submitBMI = {this.state.bmi}
    submitHeigth = {this.state.heigth}

    submitIdeal = {this.state.idealWeight}
    submitMax = {this.state.maxWeight}
    submitAve = {this.state.averageWeight}

    />
</div>

<div className="col-1-of-3">
    <Card
    id = "2"
    type="max"

    submitWeight = {this.state.weight}
    submitBMI = {this.state.bmi}
    submitHeigth = {this.state.heigth}

    submitIdeal = {this.state.idealWeight}
    submitMax = {this.state.maxWeight}
    submitAve = {this.state.averageWeight}

    />
</div>
    </div>

    </h1>;
  }
}

 {% endverbatim %}
