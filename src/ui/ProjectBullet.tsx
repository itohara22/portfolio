type Props = {
  text: string;
};

export default function ProjectBullet({ text }: Props) {
  return (
    <span className="px-2 py-1 rounded-full border-cream border-2 text-cream font-inter">
      {text}
    </span>
  );
}
