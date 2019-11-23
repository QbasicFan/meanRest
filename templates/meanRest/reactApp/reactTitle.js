 {% load staticfiles %}

class Header extends React.Component {



  render() {




    return <div>

                <br/>
                <br/>
                <div className="w3-panel w3-blue">
                <h1 className="w3-xxxlarge w3-text-orange">
                    - Planet Cat fintness -
                </h1>
                    <img src= "{% static "img/meanRest/frontmean.jpg" %}"/>




                </div>
                <br/>
                <br/>
            </div>
  }

}
