import "./ArtCard.scss";

interface ArtCardProps {
  artwork: {
    title: string;
    artist_display: string;
    date_display: string;
    image_id: string;
    id: number;
  };
}

const ArtCard: React.FC<ArtCardProps> = ({ artwork }) => {
  const { title, artist_display, date_display, image_id, id } = artwork;

  const apiURL = "https://www.artic.edu/artworks/";

  return (
    <div className="art-card">
      <a
        href={`${apiURL}${id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title} from Art Institute of Chicago`}
      >
        {image_id && (
          <img
            src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
            alt={title}
            className="art-card-img"
            loading="lazy"
          />
        )}
      </a>
      {title && <h4 className="art-card-title">{title}</h4>}
      {artist_display && date_display && (
        <p className="art-card-artist-date">{`${artist_display}, ${date_display}`}</p>
      )}
      <a
        href={`${apiURL}${id}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title} from Art Institute of Chicago`}
      >
        read more
      </a>
    </div>
  );
};

export default ArtCard;
