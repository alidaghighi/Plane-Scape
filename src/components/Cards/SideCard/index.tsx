interface ISideCard {
  src?: string;
  alt?: string;
  title?: string;
  classNameOverlay?: string;
  imageClassName?: string;
  titleStyle?: string;
  titleTextStyle?: string;
  icon?: string;
}

const SideCard = ({
  src = "https://placehold.co/300x250",
  alt = "Image",
  title = "Title",
  classNameOverlay = "",
  imageClassName = "rounded-2xl w-[300px] h-[250px] object-cover object-center bg-cover",
  titleStyle = "absolute bottom-0 left-0 text-white p-4",
  titleTextStyle = "text-xl font-bold mt-2",
  icon = "fas fa-plane-departure",
}: ISideCard) => {
  return (
    <div className="relative">
      <div>
        <div className={"rounded-2xl " + classNameOverlay} />
        <img alt={alt} className={imageClassName} src={src} />
      </div>
      <div className={titleStyle}>
        <div className="flex-col">
          {icon && <i className={icon}></i>}
          <div className={titleTextStyle}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
