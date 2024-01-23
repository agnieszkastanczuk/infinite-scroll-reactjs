import "./CatCard.scss";

interface CatCardProps {
  cat: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
}

const CatCard: React.FC<CatCardProps> = ({ cat }) => {
  const { id, url, width, height } = cat;

  return (
    <div className="cat-card">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`see image`}
      >
        {url && (
          <img
            src={url}
            alt={`Cat #${id}`}
            className="cat-card-img"
            loading="lazy"
          />
        )}
      </a>
      {id && <h4 className="cat-card-title">{`Cat #${id}`}</h4>}
      {width && height && (
        <p className="cat-card-size">{`Size: ${width} x ${height}`}</p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`see image`}
      >
        see image
      </a>
    </div>
  );
};

export default CatCard;
