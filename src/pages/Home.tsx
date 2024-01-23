import InfinityScroll from "../components/InfinityScroll/InfinityScroll";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import ArtsListContainer from "../containers/ArtsListContainer/ArtsListContainer";

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>
          Discover Art from Art Institute of Chicago - first example of using
          the InfiniteScroll component
        </h1>
        <h2>
          👉 second example of using the InfiniteScroll component{" "}
          <a
            href="https://agnieszkastanczuk.github.io/infinite-scroll-reactjs/#/cats"
            aria-label="example with Cats API"
            target="_blank"
            rel="noreferrer"
          >
            example with Cats API
          </a>
        </h2>
        <h2>
          📝 Art Institute of Chicago API:{" "}
          <a
            href="https://api.artic.edu/docs/"
            aria-label="API docs"
            target="_blank"
            rel="noreferrer"
          >
            API docs
          </a>
        </h2>
        <h2>
          Github repo:{" "}
          <a
            href="https://github.com/agnieszkastanczuk/infinite-scroll-reactjs"
            aria-label="code"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>
        </h2>
        <p>Scroll to see more</p>
      </header>{" "}
      <InfinityScroll
        render={(pageNumber, lastElementRef) => (
          <ArtsListContainer
            limit={8}
            pageNumber={pageNumber}
            lastArtworkElementRef={lastElementRef}
          />
        )}
      />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
