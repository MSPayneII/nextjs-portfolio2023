const ShowcasedItems = ({ items }) => {
  return (
    <div className="showcased-items-section">
      {items.map((item, index) => {
        const { icon, header, body } = item;
        return (
          <article key={index} className="showcased-item">
            <img src={icon} alt={`${header} icon`} className="undraw-svgs" />
            <h3 className="quaternary-header">{header}</h3>
            <p className="showcased-item-body">{body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ShowcasedItems;
