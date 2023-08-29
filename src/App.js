import "./App.css"
import Navbar from "./Navbar";
import TitledList from "./TitledList";
import BriefProjectInfo from "./briefProjectInfo";

export default function App() {
  return (
      <div className="App">
          <Navbar />
          <TitledList
              title="hrszpuk"
              description="Hungry and ready for anything \( ﾟヮﾟ)/"
              list={[
                  "Proficient in C/C++, Python, and Go!",
                  "Favourite foods: borscht, pasta bake, cider",
                  "(っ´ω`c)♡ coffee addict",
                  "Interested in programming language development, computer graphics, robotics, and hacking!",
              ]}
          />
          <TitledList
              title="/blog"
              description="Want to read about what I'm working on (╯°□°)╯???"
              list={[
                  <p style={{display: "inline"}}><a>0x00000000/</a> &lt;--- example</p>,
                  <p style={{display: "inline"}}><a>0x00000000/</a>&lt;--- stuff</p>,
              ]}
          />
          <TitledList
              title="Do you want to have some fun??!"
              description="Check out the following links ٩(^‿^)۶"
              list={[
                  <p style={{display: "inline"}}><a>fun.hrszpuk.com</a> &lt;--- list of experiments/demos</p>,
              ]}
          />
          <h2>/proj</h2>
          <h4>> Highlights</h4>
          <h4>> Notable projects</h4>
          <ul className="dashed">
              <BriefProjectInfo
                  title="rectx"
                  brief="A project manager for the ReCT programming language"
                  description="a"
              />
          </ul>
      </div>
  )
}