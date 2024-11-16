import ClickablePicture from "./components/clickable-picture/clickable-picture";
import Counter from "./components/counter/counter";
import LikeButton from "./components/like-button/like-button";


function App() {
  return (
    <div className="container py-5">
      <h1> LAB | React Training</h1>

      <LikeButton className="mb-2" />
      <LikeButton />

      <Counter />

      <ClickablePicture />
    </div>
  );
}

export default App;
