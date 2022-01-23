import { useUserDataStore } from "../../../store/store";



const Background = ({ css }) => {
    const setCss = useUserDataStore(state => state.setCss)

    const handleClick = (css) => {
        setCss(css);
    }
    
    return(
        <div className="bg-pattern" onClick={() => handleClick(css)}>
            <style jsx>{`
            .bg-pattern{
                opacity: 0.9 !important;
                ${css}
                background-blend-mode: normal;
            }
            `}</style>
        </div>
    )
}

export default Background;