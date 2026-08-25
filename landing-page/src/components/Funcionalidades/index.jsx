import { CiCalendar } from "react-icons/ci";

export default function Funcionalidade() {
    return (
        <>
            <section className="px-20">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <p>Funcionalidades</p>
                    </div>

                    <h2>Tudo que o seu pet precisa, num só lugar</h2>
                    <p>
                        Da vacina ao passeio, o PetCare acompanha cada etapa do cuidado-pra você nunca perder de vista.
                </p>
                </div>

                <div className=" mx-w-[100px] bg-white border border-[#ccc] roudend-lg p-8 mt-14 mb-12">
                    <div className="bg-[#DCEFE4] rouded-2xl p-2 w-12">
                    <CiCalendar size={32} color="#153229"/>
                    </div>
                    <p className="mt-6 font-bold text-[18px]">
                        Agendamento de Consultas
                    </p>

                    <p className="mt-4">
                    Marque horários com clinicas parceiras em poucos toques e receba lembretes automáticos 
                    </p>
                </div>
            </section>
        </>
    )
}