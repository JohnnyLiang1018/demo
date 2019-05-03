import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/blog/pasta-banner.png';
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
      <Body></Body>>
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
                    <h1><font size = "7" color = "white">Salad</font></h1>
                </div>
            </div>
        </div>
      </div>
    );
  };
}

class Body extends React.Component {
  render() {
    return (
          <div>
              <div class="blog-section section mt-80 mt-lg-60 mt-md-60 mt-sm-60 mt-xs-40 mb-40 mb-lg-20 mb-md-20 mb-sm-20 mb-xs-0">
                  <div class="container">
                        <div class="row row-30">
                            <div class="col-xl-9 col-lg-8 col-12 order-1 order-lg-2 mb-40">
                                <div class="single-blog">
                                    <div class="image-wrap">
                            <img src={require('./assets/images/blog/pasta1.png')} alt=""></img>
                        </div>
                        <div class="content">
                            <ul class="meta">
                            </ul>
                            <div class="desc">
                                <h3><font size="5" color="black">Ingredients</font></h3>
                                <p><font size="4" color="black">Servings: Approx. 4</font></p>
                                <p><font size="4" color="black">Prep Time: 30 minutes </font></p>

                                <font size="4" color="black"> - 3 cups medium mushrooms (shitake or porcini), stems removed, sliced</font><br/>
                                <font size="4" color="black"> - 3 cups spinach</font><br/>
                                <font size="4" color="black">- 1 cup heavy cream</font><br/>
                                <font size="4" color="black">- 3/4 cup Parmesan cheese</font><br/>
                                <font size="4" color="black">- 1/2 cup walnuts, roughly chopped</font><br/>
                                <font size="4" color="black">- 1 tablespoon freshly squeezed lemon juice</font><br/>
                                <font size="4" color="black">- 1 tablespoon extra-virgin olive oil</font><br/>
                                <p><font size="4" color="black">- salt and freshly ground pepper, to taste</font><br/></p>
                                <p><h3><font size="5" color="black">Directions</font></h3></p>
                                <p><font size="4" color="black">- Bring a large pot of generously salted water to boil.</font><br/></p>
                                    <p><font size="4" color="black">- Heat 1 tablespoon olive oil in a large pan or skillet over medium heat and saute mushrooms, seasoned with salt and covered, for 15-20 minutes, or until softened.</font><br/></p>
                                    <p><font size="4" color="black">- Stir occasionally and reduce heat if mushrooms start to burn.</font><br/></p>
                                    <p><font size="4" color="black">Add spinach to mushrooms and pour in lemon juice. Cook until wilted, then add walnuts.</font><br/></p>
                                    <p><font size="4" color="black">- Cook pasta according to packaging directions, or until al dente. Drain (reserving 1/2 cup pasta water) and set aside.</font><br/></p>
                                    <p><font size="4" color="black">- Add heavy cream to the spinach and mushrooms, stirring well, and mix in Parmesan cheese. If sauce is too thick, add pasta water one tablespoon at a time.</font><br/></p>
                                    <p><font size="4" color="black">- Taste and season with salt and pepper, if necessary.</font><br/></p>
                                    <p><font size="4" color="black">- Pour drained pasta into the sauce and toss well to coat thoroughly. Cook on low heat for 5 minutes, or until sauce thickens and sticks to pasta.</font><br/></p>
                                    <p><font size="4" color="black">- Transfer to serving plates, garnish with more Parmesan and serve hot.</font><br/></p>
                                    <p><font size="4" color="black">- Serve!</font><br/></p>                            
                            </div>

                            <div class="blog-footer row mt-45">

                            </div>
                        </div>
                    </div>
                    <div class="comment-wrap mt-40">

                    </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-12 order-2 order-lg-1 mb-40">

                    <div class="sidebar">
                        <h4 class="sidebar-title">Recipe Menu</h4>
                        <ul class="sidebar-list">
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

ReactDOM.render(<App/>, document.getElementById('root'));
export default App;
