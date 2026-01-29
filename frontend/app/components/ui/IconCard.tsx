import BrainIcon from "../icons/brain-icon";

export default function IconCard() {
  return (
    <div className="flex flex-col justify-center text-center my-2
    xl:max-w-[400px]">
      <div className="bg-seafoam rounded-t-2xl px-4 py-2 flex items-center justify-center"><BrainIcon /></div>
      <div className="flex flex-col items-center justify-center bg-seafoam-light rounded-b-2xl py-4 px-8">
        <span className="text-2xl">Neurological Focus</span>
        <p className="font-satoshi text-xl">Address the system controlling everything else.</p>
      </div>
    </div>
  )
}