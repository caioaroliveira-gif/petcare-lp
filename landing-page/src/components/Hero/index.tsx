import { MdOutlinePets } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" flex flex-col items-center justify-center mt-20">
      <div className="rounded-full flex gap-2 bg-[#DCEFE4] p-2">
        <MdOutlinePets size={24} color="#3F9271" />
        <p>Feito para tutores atentos</p>
      </div>

      <div className=" justify-center text-center mt-5 items-center">
        <p className=" text-5xl mt-10 text-[#4B5A54]">
          Toda a rotina do seu pet,
        </p>
        <p className=" text-center text-5xl  text-[#FF6B4A]">
          numa coleira só.
        </p>
        <p className="text-center mt-5 text-pretty">
          Agende consultas, acompanhe vacinas e fale com veterinários <br />
          sem sair do app. O PetCare organiza o que seu pet precisa, antes de
          você precisar lembrar.
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

      <div className="flex justify-center gap-8 mt-9 text-center">
        
        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-extrabold">12 mil+</p>
          <p className="text-sm text-gray-600">pets cadastrados</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="flex items-center gap-1 text-2xl font-extrabold">
            4.9 <FaStar />
          </p>
          <p className="text-sm text-gray-600">avaliação média</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-2xl font-extrabold">24/7</p>
          <p className="text-sm text-gray-600">suporte via chat</p>
        </div>
      </div>
      
    </section>
  );
}
