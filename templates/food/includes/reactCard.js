{% load staticfiles %}


class CardUser extends React.Component {



    constructor(){
        super()
        this.state = {
            id:1,
            outStr: "Phil",
            outFood: "cheese",
            outImage: "http://buysellgraphic.com/images/graphic_preview/large/dark_black_background_abstract_blank_design_29272.jpg"
        }
    };


  render() {

      var  imList = [
          //skinny cats
          [
              "{% static "img/meanRest/fit01.jpg" %}",
              "{% static "img/meanRest/fit02.jpg" %}",
              "{% static "img/meanRest/fit03.jpg" %}",
          ],

          //average cats
          [
              "{% static "img/meanRest/shape01.jpg" %}",
              "{% static "img/meanRest/shape02.jpg" %}",
              "{% static "img/meanRest/shape03.jpg" %}",
          ],
          //fat cats
          [
              "{% static "img/meanRest/athletic01.jpg" %}",
              "{% static "img/meanRest/athletic02.jpg" %}",
              "{% static "img/meanRest/athletic03.jpg" %}",
          ],

          ]

      //var setPic =  imList[Math.floor(Math.random() * imList.length )] ;


    var l=1;

     if (this.props.submitWeight < 60)
     l=0;
     else if (this.props.submitWeight > 100)
     l=2;




     var setPic =  imList[this.props.id][l] ;

    return <div>

                    <div className="w3-card-4 w3-dark-grey">
                        <div className="w3-container w3-center">
                            <div className="w3-white">
                                <img src= {setPic} />

                            </div>
                            <h4 className="c">
                                <span className="w3-pink">{this.props.type} weight</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>Weight : { this.props.id == 0 ? this.props.submitIdeal :
                                                   this.props.id == 1 ? this.props.submitAve :
                                                   this.props.id == 2 ? this.props.submitMax:0 }</li>
                                    <li>Height : {this.props.submitHeigth}</li>

                                    <li>BMI : { this.props.id == 0 ? 19 :
                                                   this.props.id == 1 ? 22 :
                                                   this.props.id == 2 ? 24:0 }</li>
                                    <li>{this.state.outStr}</li>

                                </ul>

                                <p></p>

                            </div>
                        </div>
                        <div className="w3-card-4 w3-dark-grey">
                            <div className="w3-container w3-center">
                                <div className="w3-white">
                                    <p className="">Only</p>
                                    <p className="">$9,999.99/Mo</p>
                                </div>
                                <button className="w3-btn w3-black w3-wide">Membership Now</button>
                            </div>
                        </div>
                    </div>
            </div>
  }

}
