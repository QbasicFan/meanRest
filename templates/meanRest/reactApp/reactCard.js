class Card extends React.Component {



    constructor(){
        super()
        this.state = {
            id:1,
            outStr: "Phil",
            outFood: "cheese",
            outImage: "https://i.ytimg.com/vi/qgcGjcoQrVI/hqdefault.jpg"

        }


    };




  render() {


      var  imList = [
          //skinny cats
          [
              "https://cdn.supadupa.me/shop/1807/images/1322263/skinny_cat4_large.jpg?1386037207",
              "http://cf.girlsaskguys.com/q1732142/a145dc11-2cb7-4264-b44f-3d0e4abf5348.gif",
              "https://image.shutterstock.com/image-photo/skinny-cat-image-260nw-1079332688.jpg",
          ],

          //average cats
          [
              "https://i.ytimg.com/vi/UoJglAw2PM8/hqdefault.jpg",
              "https://i.ytimg.com/vi/okUWga1mTQU/hqdefault.jpg",
              "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a",
          ],
          //fat cats
          [
              "http://i.ytimg.com/vi/6eLIMc4khe0/hqdefault.jpg",
              "http://3.bp.blogspot.com/-Vfk02mn-6hs/TcuNsRBcDoI/AAAAAAAAAeQ/p7zmFREtHJo/s400/world+biggest+cat4.jpg",
              "https://i.ytimg.com/vi/rjYARQtW5jg/hqdefault.jpg",
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

                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                <img src= {setPic}/>

                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">{this.props.type} weight</span>
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
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                    <p className="card__price-value">$9,999.99/Mo</p>
                                </div>
                                <button className="btn btn--white">Membership Now</button>
                            </div>
                        </div>
                    </div>
            </div>
  }

}
