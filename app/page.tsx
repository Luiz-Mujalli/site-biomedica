import Image from "next/image";

const WHATSAPP_NUMBER = "553432460111";
const WHATSAPP_MESSAGE =
  "Olá! Vi que o site de vocês está em construção e vim fazer o pedido por aqui!";

export default function Home() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="relative min-h-screen">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/fachada.png)" }}
        aria-hidden
      />
      {/* Overlay escuro */}
      <div
        className="absolute inset-0 bg-black/70"
        aria-hidden
      />
      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        <div className="w-full max-w-2xl rounded-3xl bg-black/50 px-8 py-10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-[2px] sm:px-12 sm:py-12">
          <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex justify-center animate-fade-in">
            <div className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <Image
                src="/logo.png"
                alt="Drogaria Biomédica"
                width={97}
                height={80}
                priority
                className="h-auto w-full max-w-[160px] object-contain"
              />
            </div>
          </div>

          <p className="animate-fade-in animate-fade-in-delay-1 bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-lg font-bold leading-relaxed text-transparent sm:text-4xl">
            DROGARIA BIOMÉDICA
          </p>
          
          <p className="animate-fade-in animate-fade-in-delay-1 text-white bg-clip-text text-lg font-bold leading-relaxed text-transparent sm:text-2xl">
            Sua Saúde em Primeiro Lugar
          </p>

          {/* Texto principal */}
          <p className="animate-fade-in animate-fade-in-delay-1 text-lg leading-relaxed text-white [text-shadow:0_1px_3px_rgba(0,0,0,1),0_2px_10px_rgba(0,0,0,1)] sm:text-xl">
          Novidades vindo por aí! Enquanto nosso site fica pronto, clique no botão abaixo e fale com a gente direto no WhatsApp!
          </p>

          {/* Texto em negrito */}
          <p className="animate-fade-in animate-fade-in-delay-2 text-xl font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,1),0_2px_10px_rgba(0,0,0,1)] sm:text-2xl">
            Entrega grátis para toda a cidade!
          </p>

          {/* Botão WhatsApp */}
          <div className="animate-fade-in animate-fade-in-delay-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-logo-pulse inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition hover:bg-[#20BD5A] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            >
              <Image
                src="/icon/whatsapp.png"
                alt=""
                width={100}
                height={100}
                className="h-7 w-7 shrink-0"
              />
              <span>FAÇA SEU PEDIDO AQUI</span>
            </a>
          </div>
          
          {/* Botão Instagram */}
          <a
            href="https://www.instagram.com/biomedicadrogaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in animate-fade-in-delay-3 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-8 py-4 text-base font-bold text-white shadow-lg transition opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
          >
            <Image
              src="/icon/instagram.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
            <span>Siga-nos no Instagram</span>
          </a>


          </div>
        </div>
      </div>
    </div>
  );
}
