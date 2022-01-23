import { useUserDataStore } from "../../../store/store";


const Theme = ({ color, setColor }) => {

    const handleClick = (color, setColor) => {
        setColor(`${color}`)
    }
    return(
        <> 
        <div className="box" style={{background: `${color}`}} onClick={() => handleClick(color, setColor)}>
        </div>
        </ >
    )
}

export default Theme;