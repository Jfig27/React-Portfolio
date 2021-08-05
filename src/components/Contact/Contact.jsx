import "./contact.scss"
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Button from '@material-ui/core/Button';
import {useState} from 'react'

export default function Contact() {
    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="tippityTop">
                <h1>Hey!</h1>
                <h2>Contact Me!</h2>
            </div>
            <div className="top">
                <EmojiPeopleIcon style={{ fontSize: 300}}/>
            </div>
            <div className="bottom">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    {/* <button type="submit">Send</button> */}
                    <Button type="submit" variant="contained" color="primary">
                        Send
                    </Button>
                    {message && <p>Thanks, I'll reply soon!</p>}
                </form>
            </div>
        </div>
    )
}
