class Food extends React.Component {
    constructor(){
        super()
        this.state = {
            meal: "",
            food: ["pasta","burger","pizza"]

        }
        this.searchFunction = this.searchFunction.bind(this);

    };


 searchFunction(d){
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      //console.log(xhr.responseText)
          //this.setState({outStr: xhr.responseText})
          var myObj = JSON.parse(xhr.responseText);
var str="";
for (var i=0 ; i<myObj.hits.length ; i++)
str += "Name : "+myObj.hits[i].fields.item_name +"<br>Calories : " +myObj.hits[i].fields.nf_calories+"\n";

        //document.getElementById("caloriesApp").innerHTML = str ;
        this.setState({meal: str})

    })
    // open the request with the verb and the url
    xhr.open('GET', "https://api.nutritionix.com/v1_1/search/"+d+"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId={secretID}&appKey={secretKey}")
    // send the request
    xhr.send()


};


  render() {
    return <div>

                <br/>
                <br/>

                <button onClick={()=> this.searchFunction(this.state.food[0])} className="text-center u-margin-top-big btn btn--blue">{this.state.food[0]}</button>
                <button onClick={()=> this.searchFunction(this.state.food[1])} className="text-center u-margin-top-big btn btn--blue">{this.state.food[1]}</button>
                <button onClick={()=> this.searchFunction(this.state.food[2])} className="text-center u-margin-top-big btn btn--blue">{this.state.food[2]}</button>



                <hr/>

                <h1 className="heading-secondary">
                    {this.state.meal}
                </h1>
                <br/>
                <br/>
            </div>
  }

}
