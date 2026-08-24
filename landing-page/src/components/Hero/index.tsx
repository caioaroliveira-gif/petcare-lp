import { MdOutlinePets } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" flex flex-col items-center justify-center mt-20">

      <div className="rounded-full flex gap-2 bg-[#DCEFE4] p-2">
        <MdOutlinePets size={24} color="#3F9271" />
        <p>Feito para tutores atentos</p>
      </div>

      <div className=" justify-center text-center mt-5 items-center   ">
        <p className=" text-5xl mt-10 text-[#4B5A54]">
          Toda a rotina do seu pet,
        </p>
        <p className=" text-center text-5xl  text-[#FF6B4A]">
          numa coleira só.
        </p>
        <p className="text-center mt-5 text-pretty">
          Agende consultas, acompanhe vacinas e fale com veterinários <br />
          sem sair do app. O PetCare organiza o que seu pet precisa, antes de você precisar lembrar.
        </p>
      </div>

      <div className="mt-5 flex gap-5">
        <a className="mt-5 bg-[#FF6B4A] text-white font-medium text-sm px-8 py-4 rounded-full shadow-2x1">
          Ver funcionalidade
        </a>
        <a className="mt-5 bg-[#1F4136] text-white font-medium text-sm px-8 py-4 rounded-full shadow-2x1">
          Falar com um veterinário
        </a>
      </div>

      <div className="text-2xl text-center mt-9 flex gap-5 font-extrabold">
        <p>12 mil </p> <FaPlus />
        <p>4.9 </p> <FaStar />
        <p>24/7</p>
      </div>

      <div className="flex gap-5 text-center text-sm">
        <p>pets cadastrados</p>
        <p>avalição média</p>
        <p>suporte via chat</p>
      </div>

    </section>

  )
}