class Track extends React.Component {


render() {



 return <span>

<h1 >Calories tracker: </h1>
<h2>Dailly calorie</h2>
<p>Medium</p>
<h3>{this.props.count} => {this.props.count -3000}</h3>
 <progress value={this.props.count} max="3000"></progress>

<p>Min</p>
<h3>{this.props.count} => {this.props.count -2000}</h3>
 <progress value={this.props.count} max="2000"></progress>

<p>Max</p>
<h3>{this.props.count} => {this.props.count -4000}</h3>
 <progress value={this.props.count} max="4000"></progress>

 </span>
}
}
