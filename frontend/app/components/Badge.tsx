interface BadgeProps {
  text: string;
  textColor: string;
  bgColor: string;
}

export default function Badge({ text, textColor, bgColor }: BadgeProps) {
  const textColorClass = `text-${textColor}`;
  const bgColorClass = `bg-${bgColor}`;
  return (
    <div className={`text-xl text-center px-6 py-2 uppercase w-fit rounded-2xl ${textColorClass} ${bgColorClass} ${bgColor == 'transparent' ? 'border-2 border-${textColor}' : ''}`}>
      {text}
    </div>
  )
}