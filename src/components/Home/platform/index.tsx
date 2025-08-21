import Link from "next/link";
import Image from "next/image";
import TimelineImg from "@/public/img-Add.png";

const Platform = () => {
  return (
    <section className="md:pt-44 sm:pt-24 pt-12 relative z-1">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section grid grid-cols-12 items-center before:content-[''] before:absolute relative before:w-96 before:h-64 before:bg-start before:bg-no-repeat before:-bottom-11 overflow-hidden lg:before:right-48 before:-z-1 before:opacity-10 ">
          <div className="lg:col-span-8 col-span-12 flex justify-between items-start flex-wrap">
  {/* Texto à esquerda */}
  <div className="w-full lg:w-8/12">
    <h2 className="text-white sm:text-40 text-30 mb-6">
      Fabricação de <span className="text-primary">Add-Ons</span>{" "}
    </h2>
    <div className="relative inline-block mb-6">
  <p className="text-muted text-opacity-60 text-18">
    Na Fábrica de Add-Ons da LAB1, desenvolvemos recursos totalmente integrados 
    ao SAP Business One para automatizar tarefas, reduzir erros e acelerar 
    processos — tudo com foco em gerar resultados sólidos e eficiência real.
  </p>
  <span className="block w-20 h-0.5 bg-primary absolute -bottom-2 left-0" />
</div>
    <p className="text-muted text-opacity-60 text-18">
      Complementos que ampliam ainda mais o poder do SAP Business One com automações inteligentes e processos otimizados.
    </p>
  </div>
  <div className="w-full lg:w-4/12 flex flex-col items-end text-right mt-8 lg:mt-0 gap-6 relative">
  <div>
    <span className="text-primary text-40 font-bold block">200+</span>
    <p className="text-muted text-18">Clientes atendidos</p>
  </div>
  <div>
    <span className="text-primary text-40 font-bold block">200+</span>
    <p className="text-muted text-18">Add‑Ons desenvolvidos</p>
  </div>
  <div>
    <span className="text-primary text-40 font-bold block">15+</span>
    <p className="text-muted text-18">Anos de experiência</p>
  </div>

  <div className="absolute top--15 right-0 translate-x-full ml-8 hidden sm:block w-85 h-85">
  <Image
    src="/images/timeline/img-Add.png"
    alt="Imagem timeline"
    fill
    className="object-contain"
  />
</div>
</div>
</div>
        </div>
        <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
      </div>
    </section>
  );
};

export default Platform;
