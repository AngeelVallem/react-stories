import "./App.css";
import Stories from "./components/stories";
import video from "./assets/video2.mp4";
import video1 from "./assets/video.mp4";

function App() {
  return (
    <main>
      <h1>React Stories</h1>

      <Stories stories={[video, video1]} />
    </main>
  );
}

export default App;
