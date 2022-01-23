

const ExperienceContent = ({ x }) => {
    return(
        <div className='resume-experience'>
            <div className="experience-tag-one"> <span contentEditable="true">{x.head}</span><div contentEditable="true">{x.company}</div></div>
            <div contentEditable="true" id='sub-head-one'>{x.year}</div>
            <div contentEditable="true" id='para-head-one'> {x.body} </div>
        </div> 
    )
}

export default  ExperienceContent;