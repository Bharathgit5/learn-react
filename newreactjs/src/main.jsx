import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*//you can make function here also
function Myapp(){
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}
*/
/*// but with the behind the code way we cannot render
const reactElement = {
  type:'a',
  props:{
      href:'https://www.printfc.in',
      target:'_blank'
  },
  children:'Click me'
}*/

//but if we make another obj without type,props,children we can render
const anotherelement = (
  <a href='https://www.printfc.in' target='_blank'>click me</a>
)

//lets build the same above of reactElemt according to react syntax
const reactElement = React.createElement(  //createElement in react the reactway
  //'tag' , {props: href,target},
  'a',
  {href : 'https://www.printfc.in'},
  'click me'
)


ReactDOM.createRoot(document.getElementById('root')).render(

  //  anotherelement 
  // we should not use <anotherelement/>
  <App/>

)
