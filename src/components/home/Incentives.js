


const incentives = [
    {
      name: 'Rapida ejecucion',
      imageSrc: 'https://bafybeia6c3g2ubhppj2gbfnac3ufxsfk6lpmpkrqqfuvcd5xgilcds2sba.ipfs.w3s.link/ipfs/bafybeia6c3g2ubhppj2gbfnac3ufxsfk6lpmpkrqqfuvcd5xgilcds2sba/RocketLaunch.svg',
      description: "Sabemos lo importante que es sacar un negocio adelante, por lo que no andamos con vueltas para terminar lo que nos pidas",
    },
    {
      name: 'Presupuestos a la medida',
      imageSrc: 'https://bafybeib3o3zv26njoxdi7ixvlllqkd4rocgtjcqggksrjwmtl3w3p4f7ti.ipfs.w3s.link/ipfs/bafybeib3o3zv26njoxdi7ixvlllqkd4rocgtjcqggksrjwmtl3w3p4f7ti/CreditCard.svg',
      description: "Construimos nuestros servicios en base a tus posibilidades",
    },
    {
      name: 'Excelencia de atencion',
      imageSrc: 'https://bafybeiglq4ss3cw4ua7dn46bgg6arw5xs2v5o4epmygw6whwq73ub6qxzm.ipfs.w3s.link/ipfs/bafybeiglq4ss3cw4ua7dn46bgg6arw5xs2v5o4epmygw6whwq73ub6qxzm/UserGroup.svg',
      description:
        "Nuestro equipo de profesionales está comprometido a brindar un servicio excepcional y estar disponibles para responder cualquier pregunta o inquietud que puedan tener nuestros clientes en cualquier momento.",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="ml-10 mx-auto  py-24  sm:py-32">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Construimos nuestro negocio atendiendo sus necesidades
              </h2>
              <p className="mt-4 text-gray-500">
              Nos esforzamos por entender las necesidades de nuestros clientes y trabajamos incansablemente para cumplir sus deseos y ayudarlos a alcanzar sus metas. Nos enorgullecemos de ofrecer un servicio personalizado y de alta calidad para cada uno de nuestros clientes. ¡Confía en nosotros para ayudarte a alcanzar tus objetivos y haz crecer tu negocio con nosotros!
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }