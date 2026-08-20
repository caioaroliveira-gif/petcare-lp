import { MdOutlinePets } from "react-icons/md";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center mt-20">
          <div className="flex gap-2 bg-[#DCEFE4] p-2">
            <MdOutlinePets size={24} color="#3F9271" />
            <p>Feito para tutores atentos</p>
          </div>
        </section>
    )
}