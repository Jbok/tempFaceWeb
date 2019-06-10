import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackgroundImageOnLoad from 'background-image-on-load';
import { FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { DASHBOARD_PATH } from 'constants/paths'
import './MainPage.css';
import Logo from 'containers/Navbar/Logo';

class MainPage extends Component {
  state = {   
    bgIsLoaded: false   
  };

  render() {
    const buttonStyle1 = {
      color: 'white',
      textDecoration: 'none',
      alignSelf: 'center',
      background: '#8b00ff',
      fontSize: 30
    }
    const { bgIsLoaded } = this.state;
    return (
      <div   
          style={{    
            height: '100%',
            backgroundPosition: 'center',   
            backgroundSize: 'cover',   
            backgroundImage: `url(${!bgIsLoaded ? 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg' : 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg'})`   
          }}   
        >   
          <BackgroundImageOnLoad   
            src={'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idyC61.iansI/v1/1000x-1.jpg'}   
            onLoadBg={() =>   
              this.setState({   
              bgIsLoaded: true   
            })}   
            onError={err => console.log('error', err)}   
          />   

        <header>
          <logo>F A C E W E B</logo>    
        </header>

        <text>  
        <div class="animated animatedFadeInUp fadeInUp">
          <h1>집에서 쉽게 안면 비대칭을 개선해보세요.</h1>
        </div>
        <div class="animated animatedFadeInUp fadeInUp">
          <h2>사진 한 장으로 개선과정을 기록하고 확인해보세요.</h2>
          <br>
          </br>
          <br>
          </br>
        </div>
        </text>
        <div>
        <menu>
        <Button style={buttonStyle1} component={Link} to={DASHBOARD_PATH} >start now</Button>
        </menu> 
        </div>
     
              


      </div>   

    )
  }
}

export default MainPage
