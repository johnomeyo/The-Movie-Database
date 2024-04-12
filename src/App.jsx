import CatFacts from "./CatFacts"
import InputField from "./InputField"
import MovieCard from "./MovieCard"
import Movies from "./Movies"
function App() {
  return (
    <>
      <h1>The Movie Database</h1>
      <br />
      <InputField />
      {/* <CatFacts /> */}
      <Movies />
      <MovieCard />
    </>
  )

}

export default App
