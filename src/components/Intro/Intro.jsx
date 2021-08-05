import './intro.scss'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/self.png" alt="my pic" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hey there, I'm</h2>
                    <h1>Joshua Figuereo</h1>
                    <h3>Web Developer</h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownwardIcon style={{fontSize: 90}}/>
                </a>
            </div>
        </div>
    )
}
