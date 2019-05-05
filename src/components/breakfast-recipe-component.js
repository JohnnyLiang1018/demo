import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/blog/breakfast-banner.png';
require('./assets/css/style.css');
require ('./assets/images/favicon.ico');
require('./assets/css/bootstrap.min.css');
require('./assets/css/icon-font.min.css');
require('./assets/css/plugins.css');
require('./assets/css/helper.css');
require('./assets/css/style.css');


class App extends React.Component {
  
  constructor(props){
    super(props);

  // Initialize State
    this.state = {
      isLogin: 'Login',
      Header: 'index',
      Section_one:'index',
      Section_two:'index',
      Section_three:'index',
      Footer:'index'
    }
    this.setLoginState = this.setLoginState.bind(this)
  }

  // Update State
  setLoginState(event){
    if(event === 'Login'){
      this.setState(state =>({
        isLogin: 'Logout'
      }));
    }
    else{
      this.setState(state =>({
        isLogin:'Login'
      }));
    } 
  }



  render() {
    return (
    <div className = "App">
      <Banner></Banner>
      <Body></Body>
    </div>
    );
    };
  }

const banner = {
  padding: "100px 0",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  position: "relative",
  zIndex: "1",
  backgroundImage: `url(${Background})`

} 
class Banner extends React.Component {
    render() {
      return (
        <div className ="page-banner-section section" style ={banner}>
          <div className ="container">
              <div className ="row">
                  <div className ="page-banner-content col text-center">
                      <h1><font size = "7" color = "white">French Toast</font></h1>
                  </div>
              </div>
          </div>
        </div>
      );
    };
  }


class Body extends React.Component {
    render () {
      return (
      <div>
         <div className="blog-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
              <div className="container">
                  <div className="row row-30">
                      <div className="col-xl-9 col-lg-8 col-12 order-1 order-lg-2 mb-40">
                         <div className="single-blog">
                             <div className="image-wrap">
                                <img src= {require('./assets/images/blog/french_toast1.png')} alt=""></img>
                             </div>
                            <div className="content">
                              <ul className="meta"></ul>
                            <div className="desc">
                                <h3><font size="5" color="black">Ingredients</font></h3>
                                <p><font size="4" color="black">Servings: Approx. 4</font><br /></p>
                                <p><font size="4" color="black"> - 1 teaspoon ground cinnamon</font><br />
                                <font size="4" color="black"> - 1/4 teaspoon ground nutmeg</font>< br/>
                                <font size="4" color="black">- 2 tablespoons sugar</font>< br/>
                                <font size="4" color="black">- 4 tablespoons butter</font>< br/>
                                <font size="4" color="black">- 4 eggs</font>< br/>
                                <font size="4" color="black">- 1/4 cup milk</font>< br/>
                                <font size="4" color="black">- 1/2 teaspoon vanilla extract</font>< br/>
                                <font size="4" color="black">- 8 slices challah, brioche, or white bread</font>< br/>
                                <font size="4" color="black">- 1/2 cup maple syrup, warmed</font>< br/></p>
                                <h3><font size="5" color="black">Directions</font></h3>< br/>
                                <font size="4" color="black">- In a small bowl, combine cinnamon, nutmeg, and sugar and set aside briefly.</font>< br/>
                                <font size="4" color="black">- In a 10-inch or 12-inch skillet, melt butter over medium heat. Whisk together cinnamon mixture, eggs, milk, and vanilla and pour into a shallow container such as a pie plate. Dip bread in egg 
                                mixture. Fry slices until golden brown, then flip to cook the other side.</font>< br/>
                                <font size="4" color="black">- Serve!</font>< br/>                      
                            </div>
                            <div className="blog-footer row mt-45"></div>
                        </div>
                    </div>
                    <div className="comment-wrap mt-40"></div>
                </div>

                <div className="col-xl-3 col-lg-4 col-12 order-2 order-lg-1 mb-40">
                    <div className="sidebar">
                        <h4 className="sidebar-title">Recipe Menu</h4>
                        <ul className="sidebar-list">
                            <li><a href="recipe-blog-page-Sam.html">Recipe List</a></li>
                            <li><a href="breakfast-recipe.html">Breakfast</a></li>
                            <li><a href="lunch-recipe.html">Lunch</a></li>
                            <li><a href="dinner-recipe.html">Dinner</a></li>
                        </ul>
                    </div>
                   <div class="sidebar">
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
      );
    }
  }


export default App;
