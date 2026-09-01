const root = ReactDOM.createRoot(document.getElementById('root'));
const Headercomponent =() => {
    return(<div style ={{

        textalign :"center",
        backgroundcolor:"black",
        color:"white"
    }}>
     <h1>E-commerce webpage</h1> 
     
     </div>)


}

const Productcomponent =() =>{
    return(<div>
     <div>Prod-01</div> 
     <div>Prod-02</div> 
     <div>Prod-03</div> 
     <div>Prod-04</div> 
     <div>Prod-05</div> 
     <div>Prod-06</div> 
  </div>   )

}
const footercomponent = () =>{
    return(<div>
        <h1>copyright all rights are reserved</h1>
    </div>)
const reactelement = <>
<headercomponent/>
<productcomponent/>
{footercomponent()}
</>

root.render(reactelement)
}

const app = async () => {
    const root = ReactDOM.createRoot
}