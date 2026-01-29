export default function NumberCard() {
  return (
    <div className="flex w-[485px] relative">
      <div className="flex flex-col text-white bg-sky-blue items-center px-6 pt-6 h-full rounded-2xl absolute top-0 left-0">
        <span className="uppercase text-2xl">Step</span>
        <span className="text-6xl">01</span>
      </div>
      <div className="flex flex-col bg-brand-light-blue px-8 py-6 pl-36 font-satoshi rounded-2xl">
        <span className="text-2xl font-semibold">Practitioner Questionnaire</span>
        <span className="text-xl">This short questionnaire helps us identify clinicians who are the right fis for the program and allows our team to prepare for a productive conversation tailored to you.</span>
      </div>
    </div>
  )
}