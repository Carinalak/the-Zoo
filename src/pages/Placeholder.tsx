import placeholderImage from "../assets/image/placeholderImage.png";

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.src = placeholderImage;
  event.currentTarget.alt = "Ingen bild";
};

