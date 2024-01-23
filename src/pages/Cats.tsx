import InfinityScroll from "../components/InfinityScroll/InfinityScroll";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
import CatsListContainer from "../containers/CatsListContainer/CatsListContainer";
import "../App.scss";

const Cats: React.FC = () => {
  return (
    <div>
      <header>
        <h1>
          Discover Cats - second example of using the InfiniteScroll component
        </h1>
        <h2>
          👉 first example of using the InfiniteScroll component{" "}
          <a
            href="https://agnieszkastanczuk.github.io/infinite-scroll-reactjs/"
            aria-label="example with Art Institute of Chicago API"
            rel="noreferrer"
          >
            example with Art Institute of Chicago API
          </a>
        </h2>
        <h2>
          📝 Cats API:{" "}
          <a
            href="https://developers.thecatapi.com/"
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
          <CatsListContainer
            limit={4}
            pageNumber={pageNumber}
            lastCatElementRef={lastElementRef}
          />
        )}
      />
      <ScrollToTopButton />
    </div>
  );
};

export default Cats;
