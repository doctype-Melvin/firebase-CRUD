import Buttons from "../components/Buttons"
import Header from "../components/Header"

export default function Root() {
    return (
        <div id="main">
            <div id="header">
                <Header />
            </div>
            <div id="sidebar">
                <Buttons />
            </div>
            <div id="content">Content</div>
            <div id="footer">footer</div>
        </div>
    )
}