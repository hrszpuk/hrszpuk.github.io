import "./App.css"
import Navbar from "./Navbar";

export default function App() {
  return (
      <div className="App">
          <Navbar />
          <h2>hrszpuk</h2>
          <ul className="dashed">
              <li>Hungry and ready for anything \( ﾟヮﾟ)/</li>
              <br />
              <li>Proficient in C/C++, Python, and Go!</li>
              <li>Favourite foods: borscht, pasta bake, cider</li>
              <li>(っ´ω`c)♡ coffee addict</li>
              <li>Interested in programming language development, computer graphics, robotics, and hacking!</li>
          </ul>
          <h2>/blog</h2>
          <ul className="dashed">
              <li>Want to read about what I'm working on (╯°□°)╯???</li>
              <br />
              <li><a>0x00000000/</a> &lt;--- example</li>
              <li><a>0x00000000/</a>&lt;--- stuff</li>
          </ul>
          <h2>Do you want to have some fun??!</h2>
          <ul className="dashed">
              <li>Check out the following links ٩(^‿^)۶</li>
              <br />
              <li><a>fun.hrszpuk.com</a> &lt;--- list of experiments/demos</li>
          </ul>
          <h2>/proj</h2>
          <h4>> Highlights</h4>
          <h4>> Notable projects</h4>
          <ul className="dashed">
              <li>(repo) <strong>title | brief description</strong><br />Longer description</li>
          </ul>
      </div>
  )
}