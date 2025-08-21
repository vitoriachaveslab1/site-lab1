export const TypographyConfiguration = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 text-white">Typography</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60">
          1. Altere a família de fontes aqui:{" "}
          <span className="font-semibold text-base">src/app/layout.tsx</span>
        </p>

        <div className="py-4 px-3 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-gray-400 mb-3">
            {`import { Barlow } from "next/font/google";`}
          </p>
          <p className="text-sm text-gray-400">
            {`const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "700"] });`}
          </p>
        </div>

        <div className="mt-8">
          <p className="text-base font-medium text-muted text-opacity-60 mb-2">
            2. Exemplo com a fonte Barlow:
          </p>
          <h1 className="font-barlow text-40 text-white">Texto com Barlow</h1>
        </div>
      </div>
    </>
  );
};

