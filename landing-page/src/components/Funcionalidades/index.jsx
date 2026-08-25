import { CiCalendar } from "react-icons/ci";

export default function Funcionalidade() {
  return (
    <>
      <section className="px-20">
        <div className="flex flex-col items-center justify-center">
          <div className=" mt-5 rounded-full flex gap-2 bg-[#DCEFE4] p-2">
            <p>Funcionalidades</p>
          </div>
          <div className="justify-center text-center mt-5 items-center  ">
            <h2 className=" text-4xl font-semibold text-[#153229]">Tudo que o seu pet precisa, num só lugar</h2>
            <p className="text-balance max-w-full">
              Da vacina ao passeio, o PetCare acompanha cada etapa do
              cuidado-pra você nunca perder de vista.</p>
          </div>
        </div>

        <div className=" mx-w-[100px] bg-white border border-[#ccc] roudend-lg p-8 mt-14 mb-12">
          <div className="bg-[#DCEFE4] rouded-2xl p-2 w-12">
            <CiCalendar size={32} color="#153229" />
          </div>
          <p className="mt-6 font-bold text-[18px]">Agendamento de Consultas</p>

          <p className="mt-4">
            Marque horários com clinicas parceiras em poucos toques e receba
            lembretes automáticos
          </p>
        </div>
      </section>
    </>
  );
}
