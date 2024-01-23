import "./CatsListContainer.scss";
import CatCard from "../../components/CatCard/CatCard";
import useCatsService from "../../services/useCatsService";

interface CatsListContainerProps {
  pageNumber: number;
  limit: number;
  lastCatElementRef: any;
}

const CatsListContainer: React.FC<CatsListContainerProps> = ({
  pageNumber,
  limit,
  lastCatElementRef,
}: CatsListContainerProps) => {
  const { cats, loading, error } = useCatsService(pageNumber, limit);

  return (
    <div className="catList">
      <div className="card-container">
        {cats.map((cat, index) => {
          if (cats.length === index + 1) {
            return (
              <div ref={lastCatElementRef} key={cat.id}>
                <CatCard cat={cat} key={cat.id} />
              </div>
            );
          } else {
            return <CatCard key={cat.id} cat={cat} />;
          }
        })}
      </div>
      <h3>{loading && "Loading..."}</h3>
      <h3>{error && "Error"}</h3>
    </div>
  );
};

export default CatsListContainer;
