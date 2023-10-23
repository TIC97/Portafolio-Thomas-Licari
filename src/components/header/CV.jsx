import thomaslicari from '../../assets/thomaslicari.pdf'

const CVS = () => {
    return (
        <div className='cv'>
            <a href={thomaslicari} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CVS