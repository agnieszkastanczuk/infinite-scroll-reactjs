import InfinityScroll from "./components/InfinityScroll/InfinityScroll";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import "./App.scss";
import "./containers/ArtsListContainer";
import ArtsListContainer from "./containers/ArtsListContainer";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Discover Art from Art Institute of Chicago</h1>
        <h2>- an example of using the InfiniteScroll component</h2>
        <h3>
          Art Institute of Chicago API:{" "}
          <a
            href="https://api.artic.edu/docs/"
            aria-label="API docs"
            target="_blank"
            rel="noreferrer"
          >
            API docs
          </a>
        </h3>
        <h3>
          Github repo:{" "}
          <a
            href="https://github.com/agnieszkastanczuk/infinite-scroll-reactjs"
            aria-label="code"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
        </h3>
        <p>Scroll to see more</p>
      </header>{" "}
      <InfinityScroll
        render={(pageNumber, lastElementRef) => (
          <ArtsListContainer
            pageNumber={pageNumber}
            lastArtworkElementRef={lastElementRef}
          />
        )}
      />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
