import "./index.scss";

interface ButtonProps {
  imagePath: string;
  title: string;
  className: string;
}

export function Button({ imagePath, title, className }: ButtonProps) {
  return (
    <a href="#seila" className={className}>
      <img src={imagePath} alt="" />
      <span>{title}</span>
    </a>
  );
}
