import profilePhoto from "./img/realistic_square_portrait_same_man_940a4255.png";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-slate-900 shadow-2xl flex flex-col md:flex-row">
        {/* Left Column - Sidebar */}
        <div className="md:w-1/3 bg-slate-900 text-white p-8 space-y-8">
          {/* Profile Photo */}
          <div className="bg-yellow-400 p-6 flex items-center justify-center">
            <div className="w-full aspect-square bg-white overflow-hidden">
              <img
                src={profilePhoto}
                alt="David Vázquez Meza"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* About Me */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-xl uppercase tracking-wide">Acerca de Mí</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Profesional con amplia experiencia en ventas y atención al cliente
              en el sector ferretería y aceros. Destacado por habilidades
              interpersonales, liderazgo y capacidad para trabajar en equipo.
              Siempre enfocado en garantizar la satisfacción del cliente y
              contribuir al crecimiento empresarial.
            </p>
          </div>

          {/* Personal Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-xl uppercase tracking-wide">Personal</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">
                  Dirección
                </p>
                <p className="text-gray-300">Mina Real del Cobre M5 L22</p>
                <p className="text-gray-300">
                  Naucalpan, Minas San Martin 53695
                </p>
              </div>
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">
                  Teléfono
                </p>
                <p className="text-gray-300">5582802149</p>
              </div>
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">Email</p>
                <p className="text-gray-300 break-all">
                  david.mevasa@yahoo.com.mx
                </p>
              </div>
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">
                  Fecha de Nacimiento
                </p>
                <p className="text-gray-300">19/04/1972</p>
              </div>
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">
                  Nacionalidad
                </p>
                <p className="text-gray-300">Mexicana</p>
              </div>
              <div>
                <p className="text-yellow-400 uppercase text-xs mb-1">
                  Idiomas
                </p>
                <p className="text-gray-300">Español (Nativo)</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-xl uppercase tracking-wide">Skills</h2>
            </div>
            <div className="space-y-4">
              {[
                { skill: "Ventas", level: 95 },
                { skill: "Liderazgo", level: 90 },
                { skill: "Negociación", level: 90 },
                { skill: "Atención Cliente", level: 95 },
                { skill: "Gestión Admin.", level: 80 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-200 uppercase text-xs">
                      {item.skill}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 h-2">
                    <div
                      className="bg-yellow-400 h-2 transition-all duration-300"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-xl uppercase tracking-wide">Herramientas</h2>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Microsoft Office</p>
              <p>• Google Workspace</p>
              <p>• Canva</p>
              <p>• WhatsApp Business</p>
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-xl uppercase tracking-wide">Intereses</h2>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>• Viajar y conocer mercados</p>
              <p>• Relaciones Públicas</p>
              <p>• Desarrollo de negocios</p>
              <p>• Networking empresarial</p>
            </div>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="md:w-2/3 bg-slate-800 text-white p-10 space-y-8">
          {/* Header */}
          <div className="border-l-4 border-yellow-400 pl-6 mb-10">
            <p className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
              Experto en Ventas
            </p>
            <h1 className="text-5xl mb-1 uppercase tracking-wide">David</h1>
            <h1 className="text-5xl uppercase tracking-wide">Vázquez Meza</h1>
            <div className="mt-4 text-sm text-gray-400">
              <p>Naucalpan, Estado de México</p>
              <p>5582802149</p>
              <p>david.mevasa@yahoo.com.mx</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-2xl uppercase tracking-wide">Educación</h2>
            </div>
            <div className="space-y-4 ml-5">
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-yellow-400 text-sm uppercase mb-1">
                      Derecho (Sin Título)
                    </p>
                    <p className="text-gray-300 text-sm">
                      Centro Universitario ETAC AC
                    </p>
                    <p className="text-gray-400 text-xs">
                      Tlalnepantla, México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-2xl uppercase tracking-wide">
                Experiencia Laboral
              </h2>
            </div>
            <div className="space-y-6 ml-5">
              {/* Job 1 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-3">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Persona Física con Actividad Empresarial
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    12/2009 - 02/2026
                  </p>
                  <p className="text-sm text-gray-300 mb-1">
                    Techos y Mantenimientos Mevasa · Naucalpan, México
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-2">
                  Liderazgo y coordinación de equipos de trabajo, supervisando
                  su rendimiento. Desarrollo de relaciones con clientes y de
                  alianzas estratégicas en el mercado. Identificación de
                  oportunidades de negocio y cierre de acuerdos comerciales.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>
                    • Supervisión de calidad y eficiencia de servicios prestados
                  </li>
                  <li>
                    • Desarrollo de estrategia de negocios y visión empresarial
                  </li>
                  <li>
                    • Estrategias de captación y ampliación de cartera de
                    clientes
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-2">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Asesor de Ventas y Atención al Cliente
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    11/2007 - 11/2009
                  </p>
                  <p className="text-sm text-gray-300">
                    Construsistemas Metálicos · Miguel Hidalgo, México
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Manejo de cartera de clientes y búsqueda de potenciales
                  compradores. Atención a los requerimientos de los clientes de
                  la empresa.
                </p>
              </div>

              {/* Job 3 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-2">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Asesor de Ventas y Atención al Cliente
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    11/2005 - 11/2007
                  </p>
                  <p className="text-sm text-gray-300">
                    Aceros Tepotzotlán · Cuautitlán, México
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Atención a requerimientos de clientes. Manejo de cartera y
                  búsqueda de potenciales compradores.
                </p>
              </div>

              {/* Job 4 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-2">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Asesor de Ventas y Atención al Cliente
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    10/2004 - 10/2005
                  </p>
                  <p className="text-sm text-gray-300">
                    Maseca · Naucalpan, México
                  </p>
                </div>
              </div>

              {/* Job 5 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-2">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Asesor de Ventas y Atención al Cliente
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    10/2002 - 10/2004
                  </p>
                  <p className="text-sm text-gray-300">
                    Aceros Nacionales / De Acero · Tlalnepantla, México
                  </p>
                </div>
              </div>

              {/* Job 6 */}
              <div className="border-l-2 border-gray-600 pl-6 pb-4 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-yellow-400 rotate-45"></div>
                <div className="mb-2">
                  <p className="text-yellow-400 uppercase text-sm mb-1">
                    Capacitador Área de Preventa y Administración
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    09/1995 - 09/2001
                  </p>
                  <p className="text-sm text-gray-300">
                    Coca-Cola Femsa · Tlalnepantla, México
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Participación en el desarrollo de nuevos productos y servicios
                  de acuerdo con las necesidades del mercado y los clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Key Competencies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-6 bg-yellow-400"></div>
              <h2 className="text-2xl uppercase tracking-wide">
                Competencias Clave
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
              {[
                "Trabajo por objetivos",
                "Enfoque a resultados",
                "Análisis de mercado",
                "Capacidad de negociación",
                "Gusto por las ventas",
                "Excelente comunicación",
                "Facilidad de palabra",
                "Persona proactiva",
                "Técnicas de mercadotecnia",
                "Capacidad de persuasión",
                "Resolución de problemas",
                "Tolerancia a la frustración",
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
