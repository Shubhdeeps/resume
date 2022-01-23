const EducationContent = ({ x }) => {
    return(
        <>
            <div className="experience-tag-one"> <span contentEditable="true">{x.name}</span><br/>
            <div contentEditable="true">{x.school}</div>
            <br />
            <div contentEditable="true" id='sub-head-one'>{x.year}</div>
            </div>
        </>
    )
}


export default EducationContent;