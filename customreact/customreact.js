
function customRender(reactElement,container){
   /*const domelement = document.createElement(reactElement.type)
   domelement.innerHTML = reactElement.children
   domelement.setAttribute('href',reactElement.props.href)
   domelement.setAttribute('target',reactElement.props.target)
   container.appendChild(domelement)*/

   const domelement = document.createElement(reactElement.type)
   console.log(domelement)
   domelement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
  //  if(prop === 'children') continue
    domelement.setAttribute(prop, reactElement.props[prop])
    console.log(reactElement.props[prop])

   }
   container.appendChild(domelement)
}


const reactElement = {
    type:'a',
    props:{
        href:'https://www.printfc.in',
        target:'_blank'
    },
    children:'Click me'
}


const maincontainer = document.querySelector('#root')


customRender(reactElement, maincontainer) //reactElement shows what to render and maincontainer shows what to render

/*my self explaination imagine there  are two boxes 
1.root it is a container (where to)where the html(content) should
display 
2. we have elements what to display on the container(root)
Here root is container and reactElement is content 

And customRender use both reactElement and maincontainer
to display on the container according to the data in the reactElement
if above reactElement we have 'a' type so a tag is created accordingly
and by container.appendChild() we can able to display the content

*/ 


 