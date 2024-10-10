import "./Kiskep.css"
function Kiskep(props){
    return(
        <div className="kiskep">
            <img src={props.adat.src} alt={props.adat.alt} />
        </div>
    )
}

export default Kiskep