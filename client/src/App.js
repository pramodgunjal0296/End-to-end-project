import './App.css';
import  Header  from './common/Header';
import { Footer } from './common/Footer';
import { BeforeLogin } from './beforeLogin/BeforeLogin';
import { AfterLogin } from './afterLogin/AfterLogin';
import { connect } from 'react-redux/es/exports';

function App(props) {
  return (
    <div className="App">
      <Header/>
      {props.isLoggedIn ?<AfterLogin/>: <BeforeLogin/>} 
      <Footer/>
    </div>
  );
}
 App(connect)(
  (state)=>{
    return{
      isLoggedIn:state.appReducer.isLoggedIn
    }

  })(App)

export default App;
