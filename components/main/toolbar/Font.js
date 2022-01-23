import { Paper, Typography } from "@mui/material";
import { useUserDataStore } from "../../../store/store";


const Font = ({name, family}) => {
    const setFont = useUserDataStore(state => state.setFont)
    const activeFontFamily = useUserDataStore(state => state.font)

    const handleSet = (family) => {
        setFont(family);
    }

    return(
        <>  
        <Paper onClick={() => handleSet(family)} 
        className={family === activeFontFamily.family ? "font-active font-container" : "font-container"}
        >
            <h3 id='font'> {name} </h3>
        </Paper>
         <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Amatic+SC&family=Bad+Script&family=Bebas+Neue&family=Comfortaa:wght@300&family=Kaushan+Script&family=Luxurious+Roman&family=Mea+Culpa&family=Orbitron&family=Pacifico&family=Roboto+Condensed&family=Roboto+Mono:wght@200&family=Roboto:wght@300&family=Ruluko&family=Special+Elite&family=Syncopate&display=swap');
            #font{
                font-family: ${family}
            }
            `}</style>
        </>
    )
}

export default Font;