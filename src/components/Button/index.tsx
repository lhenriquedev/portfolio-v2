import "./index.scss";

interface ButtonProps {
  image: string;
  name: string;
  className: string;
}

export function Button({ image, name, className }: ButtonProps) {
  return (
    <button className={className}>
      <img src={image} alt={name} />
      <span>{name}</span>
    </button>
  );
}
