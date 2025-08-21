import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <Logo />
            <div className="flex gap-6 items-center mt-8">
              <Link href="https://www.facebook.com/LAB1.SAP/" className="group">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="https://www.instagram.com/lab1consultoria/" className="group">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="https://br.linkedin.com/company/lab1-consultoria-sap" className="group">
                <Icon
                  icon="fa6-brands:linkedin"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
            <h3 className="text-white text-24 font-medium sm:mt-20 mt-12">
              2025 Copyright | LAB Consultoria
            </h3>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-4 md:col-span-4 col-span-6">
            <h3 className="text-white text-24 font-medium">Experiência que faz a diferença</h3>
            <p className="text-muted text-opacity-60 text-18 mt-5">
              Desde 2008, a LAB1 atua como parceira SAP Brasil, levando tecnologia, estratégia e 
              eficiência para empresas de todos os portes. Com uma trajetória marcada por inovação
              e compromisso, acumulamos mais de 15 anos de experiência transformando processos em resultados reais.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
