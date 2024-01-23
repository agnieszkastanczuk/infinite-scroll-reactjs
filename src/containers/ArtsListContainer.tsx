import "./ArtsListContainer.scss";
import ArtCard from "../components/ArtCard/ArtCard";
import useArtworksService from "../services/useArtworksService";

interface ArtListContainerProps {
  pageNumber: number;
  lastArtworkElementRef?: any;
}

const ArtsListContainer = ({
  pageNumber,
  lastArtworkElementRef,
}: ArtListContainerProps) => {
  const { artworks, loading, error } = useArtworksService(pageNumber);

  return (
    <div className="artList">
      <div className="card-container">
        {artworks.map((artwork, index) => {
          if (artworks.length === index + 1) {
            return (
              <div ref={lastArtworkElementRef} key={artwork.id}>
                <ArtCard artwork={artwork} key={artwork.image_id} />
              </div>
            );
          } else {
            return <ArtCard key={artwork.id} artwork={artwork} />;
          }
        })}
      </div>
      <h3>{loading && "Loading..."}</h3>
      <h3>{error && "Error"}</h3>
    </div>
  );
};

export default ArtsListContainer;
