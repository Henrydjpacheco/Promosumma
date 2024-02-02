import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function Accordeon() {
  const data = [
    {
      question: "¿Qué es HTML?",
      response: `El lenguaje de marcas de hipertexto (HTML) es un lenguaje
      informático que compone la mayoría de las páginas web y
      aplicaciones en línea. Un hipertexto es un texto que se utiliza
      para hacer referencia a otros fragmentos de texto, mientras que un
      lenguaje de marcas es una serie de marcas que indican a los
      servidores web el estilo y la estructura de un documento. El
      lenguaje HTML es muy sencillo de aprender y utilizar.`,
    },
    {
      question: "¿Qué es CSS?",
      response: `CSS son las siglas de Cascading Style Sheets (hojas de estilo en
        cascada). Es el lenguaje para describir la presentación de las
        páginas web, incluyendo los colores, el diseño y las fuentes,
        haciendo así que nuestras páginas web sean presentables para los
        usuarios. CSS está diseñado para hacer hojas de estilo para la
        web. Es independiente de HTML y puede utilizarse con cualquier
        lenguaje de marcado basado en XML. El CSS es popularmente llamado
        el lenguaje de diseño de la web.`,
    },
    {
      question: "¿Qué es JavaScript?",
      response: `JavaScript es un lenguaje de programación interpretado
        basado en código fuente. JavaScript es un lenguaje de programación
        interpretado basado en código fuente. JavaScript es un lenguaje de
        programación interpretado basado en código fuente. JavaScript es un
        lenguaje de programación interpretado basado en código fuente. JavaScript
        es un lenguaje de programación interpretado basado en código fuente. JavaScript`,
    },
    {
      question: "¿Qué es React?",
      response: `React es un lenguaje de programación interpretado basado en código fuente. 
      JavaScript es un lenguaje de programación interpretado basado en código fuente.
       JavaScript es un lenguaje de programación interpretado basado en código fuente. 
       JavaScript es un lenguaje de programación interpretado basado en código fuente. 
       JavaScript es un lenguaje de programación interpretado basado en código fuente. 
       JavaScript`,
    },
    {
      question: "¿Qué es Redux?",
      response: `Redux es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript`,
    },
    {
      question: "¿Qué es PHP?",
      response: `PHP es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código`,
    },
    {
      question: "¿Qué es Node.js?",
      response: `Node.js es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript es un lenguaje de programación interpretado basado en código fuente. JavaScript`,
    },
  ];
  return (
    <section className={"p-6 bg-white h-1/6 rounded-xl w-11/12 flex overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#D9D9D9] scrollbar-track-[#ffffff]"}>
      <div>
        <div>
          <h1 className="aling-center font-bold text-2xl my-3">Preguntas frecuentes</h1>
        </div>
        <div>
          {data.map((item, index) => (
            <div className="p-3   text-base  mb-3.5 border rounded-xl border-[#E6E9EF]" key={index}>
              <div className="flex items-center justify-between p-2">

              <h2 className="flex font-bold text-xl my-3 ">{item.question}</h2>
              {item ? <ChevronUpIcon className=" flex w-5 h-5"/> : <ChevronDownIcon/>}
              </div>
              <hr className="text-[#E6E9EF] mb-3.5 mx-1"/>
              <p className=" leading-7 text-gray-700">{item.response}</p>
            </div>
            

          ))}
        </div>
      </div>
    </section>
  );
}
