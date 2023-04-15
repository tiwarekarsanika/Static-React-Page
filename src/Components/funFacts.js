import Header from "./Header.js"; //file from same folder so "./filename" or "Desktop/WebDev/React/header.js"


function Reasons(){
    return (
        <div>
            <h1>Why am I excited to learn React ?</h1>
            <ol>
                <li className="list">It will help me strengthen my HTML, CSS and JS</li>
                <li className="list">I will be learning my first web development software</li>
                <li className="list">It will complete my frontend developer starter pack</li>
                <li className="list">It will take me one step closer to being a fullstack developer</li>
            </ol>
            <footer><small>© 2023 Tiwarekar development. All rights reserved.</small></footer>
        </div>
    )
}

export default function MainContent(){
    return (
        <div>
            <Header/>
            <div className="main">
                <h1>Fun facts about React</h1>
                <ul>
                    <li className="list">Was first released in 2013</li>
                    <li className="list">Was originally created by Jordan Walke</li>
                    <li className="list">Has well over 100k stars on Github</li>
                    <li className="list">Is maintained by Facebook</li>
                    <li className="list">Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <Reasons/>
            </div>
        </div>
    )
}

// const facts = (
//     <div>
//         <Header/>
//         <MainContent/>
//     </div>
// )
// instead of using div everytime to wrap your elements, you can also use empty tags <></> to nest your children elements

// ReactDOM.createRoot(document.getElementById("facts")).render(facts)

//custom components are a way of creating functions for reusability of code


//used small tag to reduce the size of footer
// ReactDOM.createRoot(document.getElementById("facts2")).render(<MainContent/>) //use Pascal text and not Camel text for custom component names

