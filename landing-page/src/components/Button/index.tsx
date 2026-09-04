interface Buttons {
  text: string;
  text_color: string;
  background: string;
  background_color: string;
  link: string;
}

export default function Button({
  text,
  text_color,
  background,
  background_color,
}: Buttons) {
  return (
    <>
      <a href={`{link}`}>
        <div className={`${background} ${background_color}`}>
          <p className={`${text} font-medium text-sm ${text_color} `}>{text}</p>

        </div>
      </a>
    </>
  );
}
