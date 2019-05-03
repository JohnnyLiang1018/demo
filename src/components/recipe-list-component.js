import React from 'react';
import ReactDOM from 'react-dom';
import Background from './assets/images/blog/IngredientsBanner.jpg';
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
                        <h1><font size = "7" color = "white">Recipes Made Just For You</font></h1>
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
                                          <div class="content">
                                                 <div class="col-10">
                                    <div class="caviar-projects-menu">
                                    <div class="text-center portfolio-menu">
                                    </div>
                    </div>
                        <div class="caviar-portfolio clearfix">
                            <div class="single_menu_item breakfast wow fadeInUp">
                                <div class="d-sm-flex align-items-center">
                                    <div class="dish-thumb">
                                        <img src={require('./assets/images/blog/french_toast.png')} alt=""></img>
                                    </div>
                                    <div class="dish-description">
                                        <h3> 
                                            <a href="breakfast-recipe.html"><font size="6" color="black">French Toast</font></a>
                                        </h3>
                                    </div>
                                    <div class="dish-value">
                                    </div>
                                </div>
                            </div>
                            <div class="single_menu_item lunch wow fadeInUp">
                                <div class="d-sm-flex align-items-center">
                                    <div class="dish-thumb">
                                        <img src={require('./assets/images/blog/salad.png')} alt=""></img>
                                    </div>
                                    <div class="dish-description">
                                        <h3><a href="lunch-recipe.html"><font size="6" color="black">Salad</font></a></h3>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="single_menu_item dinner wow fadeInUp">
                                <div class="d-sm-flex align-items-center">
                                    <div class="dish-thumb">
                                        <img src={require('./assets/images/blog/pasta.png')} alt=""></img>
                                    </div>
                                    <div class="dish-description">
                                        <h3><a href="dinner-recipe.html"><font size="6" color="black">Pasta</font></a></h3>
                                    </div>
                                    <div class="dish-value">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="caviar-portfolio clearfix">
                      </div>
                </div>
            </div>
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

