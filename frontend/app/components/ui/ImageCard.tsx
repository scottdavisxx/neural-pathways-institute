import Image from "next/image";

export default function ImageCard() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-baby-blue-20 px-8 py-6 rounded-2xl">
      <Image src="/fpo-avatar.jpg" alt="Avatar" width={62} height={62} className="rounded-full" />
      <span className="text-3xl">First Last</span>
      <p className="text-xl font-satoshi text-center">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quos.</p>
    </div>
  )
}