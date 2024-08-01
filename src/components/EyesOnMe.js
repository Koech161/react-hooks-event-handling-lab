// Code EyesOnMe Component Here

function EyesOnMe(){
    const handleFocus=()=>console.log('Good');
    const handlBlur=()=>console.log("Hey! Eyes on me!");
return(
    
    <div><button onFocus={handleFocus} onBlur={handlBlur}>Eyes on me</button></div>
)

}
export default EyesOnMe