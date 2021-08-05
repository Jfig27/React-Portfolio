import './headerbar.scss'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

export default function Headerbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"headerbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Josh!</a>
                    <div className="itemContainer">
                        <SentimentVerySatisfiedIcon className="icon"/> 
                    </div>

                </div>



                <div className="right">

                    <div className="organizer">
                        <a href="#portfolio"className={"link " + (menuOpen && "show")}>Portfolio</a>
                        <a href="#works"className={"link " + (menuOpen && "show")}>Works</a>
                        <a href="#contact" className={"link " + (menuOpen && "show")}>Contact</a>
                    </div>



                    <div className="hamburger" onClick={
                        ()=> {
                            setMenuOpen(!menuOpen);
                            
                        }
                        }>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}