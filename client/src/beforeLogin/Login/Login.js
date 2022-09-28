import React    from "react";
import Input from "../../common/Input.js";
import template from "./Login.jsx";

const inputControls=[
  {
    lbl:'User ID',
    type:'text',
    name:'uid',
    value:'',
    errorMsg:'Please Enter UID',
    isShowError:false
},
{
  lbl:'Password',
  type:'password',
  name:'pwd',
  value:'',
  errorMsg:'Please Enter Password',
  isShowError:false
}
]

class Login extends React.Component {
  state={
    template:''
  }
  componentDidMount(){
    this.prepareTemplate();
  }

  prepareTemplate(){
   let inputControlsArr= inputControls.map((obj,index)=>{
      return <Input key={index} dataObj={{...obj,fnChange:this.fnChange}}/>
    })
    this.setState({
      template:inputControlsArr
    })
  }

  fnChange=(eve)=>{
    const {name,value}=eve.target
    const inputControlObj=inputControls.find((obj)=>{
      return obj.name==name
    })
    inputControlObj.value=value;
    inputControlObj.isShowError=false
    if(!value){
      inputControlObj.isShowError=true
    }

    this.prepareTemplate()
   
  }
  fnLogin=()=>{
    let isFormValid=true
    inputControls.forEach((obj)=>{
      if(!obj.value){
        obj.isShowError=true
        isFormValid=false
      }

    })
 this.prepareTemplate()
    if(!isFormValid) return;
    let dataObj={}
    inputControls.forEach((obj)=>{
      dataObj[obj.name]=obj.value
    })
    console.log(dataObj)
    alert('sending request')
  }


  render() {
    return template.call(this);
  }
}

export default Login;
