import "./App.css"

export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <p className="logo"><a>hrszpuk</a></p>
                    <li><a>/blog</a></li>
                    <li><a>/proj</a></li>
                    <li><a>/fun</a></li>
                </ul>
            </nav>
            <hr className="dashed" />
        </>
    )
}