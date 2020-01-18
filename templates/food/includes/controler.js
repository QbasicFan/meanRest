class Router extends React.Component {

    constructor(){
        super()

        this.state = {
        weight: 90,
        heigth: 180,
        bmi: 30,
        gender: 'male',

        del: 'w3-container',
        showMe: true,

        pathId: 0
        }

     this.setPath = this.setPath.bind(this);
     this.setWeight = this.setWeight.bind(this);

     this.setHeigth = this.setHeigth.bind(this);
     this.setBmi = this.setBmi.bind(this);

     this.setShowMe = this.setShowMe.bind(this);

    };


setShowMe(){


 if (this.state.showMe){
    this.setState({ showMe: false,
                    del: 'hideMyAss'
    })
    }else {
    this.setState({ showMe: true,
                    del: 'w3-container'
        })
    }




    };


setWeight(n){
    this.setState({ weight:n  })
    };
setHeigth(n){
    this.setState({ heigth:n  })
    };
setBmi(n){
    this.setState({ bmi:n  })
    };


setPath(w){

if (w === 0)
 this.setState({pathId: <MenuList />})
else if (w === 1)
 this.setState({pathId: <Bmi w={this.setWeight.bind(this)} h={this.setHeigth.bind(this)} b={this.setBmi.bind(this)} />})
else if (w === 2)
 this.setState({pathId: <Basal w={this.setWeight.bind(this)} h={this.setHeigth.bind(this)} />})
else if (w === 3)
 this.setState({pathId: <Acti />})
else if (w === 4)
 this.setState({pathId: <Coach w={this.state.weight} h={this.state.heigth} b={this.state.bmi} g={this.state.gender} />})
else
 this.setState({pathId: <Secrete />})


 };



render() {

 return <span>

<button  onClick={this.setShowMe}>Menu show/hide</button>

<div className={this.state.del}>
<div className="w3-row">

<div className="w3-third w3-grey">
<h1>Metrics</h1>

Your weight : <progress value={this.state.weight} max="300"></progress><br/>
Your heigth : <progress value={this.state.heigth} max="300"></progress>

<hr/>

Min weight : <progress value={this.state.weight} max="300"></progress><br/>
Med weight : <progress value={this.state.weight} max="300"></progress><br/>
Max weight : <progress value={this.state.weight} max="300"></progress><br/>


</div>

<div className="w3-third">
<h1>Computed</h1>
BMI : <progress value={this.state.weight} max="300"></progress><br/>
Basal cal : <progress value={this.state.weight} max="300"></progress><br/>
Activty : <progress value={this.state.weight} max="300"></progress><br/>
</div>

<div className="w3-third w3-grey">
<h1>Measurements</h1>

Chest : <progress value={this.state.weight} max="300"></progress><br/>
Waist : <progress value={this.state.weight} max="300"></progress><br/>
Hips : <progress value={this.state.weight} max="300"></progress><br/>
Upper thigh : <progress value={this.state.weight} max="300"></progress><br/>



</div>




</div>

</div>

<div>

<h1>Choose your Link</h1>
  <button onClick={() => this.setPath(0)} className="w3-btn w3-center w3-blue"><i class="fa fa-cutlery" aria-hidden="true"></i> Calories</button>
  <button onClick={() => this.setPath(1)} className="w3-btn w3-center w3-blue"><i class="fa fa-balance-scale" aria-hidden="true"></i> Bmi</button>
  <button onClick={() => this.setPath(2)} className="w3-btn w3-center w3-blue"><i class="fa fa-table" aria-hidden="true"></i> Basal</button>
  <button onClick={() => this.setPath(3)} className="w3-btn w3-center w3-blue"><i class="fa fa-fighter-jet" aria-hidden="true"></i> Activity</button>
  <button onClick={() => this.setPath(4)} className="w3-btn w3-center w3-blue"><i class="fa fa-bullseye" aria-hidden="true"></i> Goals</button>
  <button onClick={() => this.setPath(5)} className="w3-btn w3-center w3-blue"><i class="fa fa-lock" aria-hidden="true"></i> Secrets</button>

<br />
<b>
Weight : {this.state.weight} ,
Heigth : {this.state.heigth} ,
Bmi : {this.state.bmi}
</b>
<hr />
</div>
<br />
{this.state.pathId}
<br/>
 </span>
}

}
