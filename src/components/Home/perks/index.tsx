import { perksData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";

const Perks = () => {
  return (
    <section className="pb-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <h2 className="text-white sm:text-40 text-30 font-medium relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
            Fale com a <span className="text-primary">LAB1</span>!</h2>
          <div className="mt-16 border border-border grid grid-cols-1 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-6 sm:px-20 rounded-3xl bg-dark_grey bg-opacity-35 lg:bg-perk bg-no-repeat bg-center bg-contain">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col"
              >
                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                  <Image
                    src= {`${getImagePrefix()}${item.icon}`}
                    alt={item.title}
                    width={44}
                    height={44}
                  />
                </div>
                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className="text-muted text-opacity-60"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
