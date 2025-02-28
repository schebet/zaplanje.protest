import React from 'react';
import { Menu, X, Users, Calendar, MapPin, Megaphone, Camera, Heart } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">ZAPLANJE-PUMPAJ!</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#o-protestu" className="hover:underline font-medium">O Protestu</a>
            <a href="#galerija" className="hover:underline font-medium">Galerija</a>
            <a href="#zahtevi" className="hover:underline font-medium">Zahtevi</a>
            <a href="#podrska" className="hover:underline font-medium">Podrška</a>
            <a href="#kontakt" className="hover:underline font-medium">Kontakt</a>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {menuOpen && (
          <nav className="md:hidden bg-red-700 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#o-protestu" className="hover:bg-red-800 py-2 px-3 rounded" onClick={toggleMenu}>O Protestu</a>
              <a href="#galerija" className="hover:bg-red-800 py-2 px-3 rounded" onClick={toggleMenu}>Galerija</a>
              <a href="#zahtevi" className="hover:bg-red-800 py-2 px-3 rounded" onClick={toggleMenu}>Zahtevi</a>
              <a href="#podrska" className="hover:bg-red-800 py-2 px-3 rounded" onClick={toggleMenu}>Podrška</a>
              <a href="#kontakt" className="hover:bg-red-800 py-2 px-3 rounded" onClick={toggleMenu}>Kontakt</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero section */}
      <section className="relative">
        <div className="h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596720226370-43f4ea0125ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Glas Studenata Srbije</h2>
              <p className="text-xl md:text-2xl mb-8">Ujedinjeni za bolju budućnost obrazovanja</p>
              <a href="#o-protestu" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Saznaj Više
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        {/* About the protest section */}
        <section id="o-protestu" className="mb-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">O Protestu</h2>
              <p className="mb-4">
                Studentski protest "Zaplanje-Pumpaj!" predstavlja glas nove generacije koja zahteva promene u obrazovnom sistemu Srbije. 
                Naš pokret je započeo kao odgovor na dugogodišnje probleme sa kojima se suočavaju studenti širom zemlje.
              </p>
              <p className="mb-4">
                Protest je dobio ime po simboličnom mestu Zaplanje, koje predstavlja srce studentskog aktivizma, i uzvikniku "Pumpaj!" 
                koji simbolizuje energiju i odlučnost naše borbe za pravdu i bolji obrazovni sistem.
              </p>
              <p>
                Okupljamo studente sa svih univerziteta u Srbiji, bez obzira na političku pripadnost, ujedinjene u zajedničkoj 
                borbi za dostojanstvo, kvalitetno obrazovanje i bolju budućnost.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start">
                <Users className="text-red-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Masovno Učešće</h3>
                  <p>Preko 20,000 studenata iz cele Srbije pridružilo se našem pokretu, čineći ga najvećim studentskim protestom u poslednjih 20 godina.</p>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start">
                <Calendar className="text-red-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Kontinuitet Protesta</h3>
                  <p>Protest traje već 45 dana, sa svakodnevnim okupljanjima i akcijama koje privlače sve veću pažnju javnosti i medija.</p>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-start">
                <MapPin className="text-red-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Nacionalni Pokret</h3>
                  <p>Protest se proširio na 12 gradova širom Srbije, uključujući Beograd, Novi Sad, Niš, Kragujevac i druge univerzitetske centre.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery section */}
        <section id="galerija" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">Galerija</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://slikesaprotestauzaplanju.netlify.app/images/480681568_10235532872330816_71866223307737991_n.jpg" 
                alt="Studenti na protestu" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://slikesaprotestauzaplanju.netlify.app/images/480698484_10235532875730901_2644335287378061012_n.jpg" 
                alt="Studentski marš" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://slikesaprotestauzaplanju.netlify.app/images/477032504_10235391856365505_2458918465822766670_n.jpg" 
                alt="Transparenti na protestu" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://slikesaprotestauzaplanju.netlify.app/images/55555555.jpg" 
                alt="Govornici na protestu" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://slikesaprotestauzaplanju.netlify.app/images/476233885_10235391858165550_8115568287395250994_n.jpg" 
                alt="Noćni protest" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd59a93f9f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Solidarnost na protestu" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Demands section */}
        <section id="zahtevi" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">Naši Zahtevi</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-6">
              <Megaphone className="text-red-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold">Glas studenata mora biti saslušan!</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h4 className="font-bold text-lg mb-2">1. Reforma obrazovnog sistema</h4>
                <p>Zahtevamo temeljnu reformu visokog obrazovanja koja će staviti fokus na kvalitet nastave, praktično znanje i pripremu studenata za tržište rada.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h4 className="font-bold text-lg mb-2">2. Veće učešće studenata u odlučivanju</h4>
                <p>Tražimo veće učešće studentskih predstavnika u telima koja donose odluke o obrazovanju, sa pravom glasa u svim pitanjima koja se tiču studentskog života.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h4 className="font-bold text-lg mb-2">3. Poboljšanje studentskog standarda</h4>
                <p>Zahtevamo bolje uslove u studentskim domovima, veće stipendije, pristupačnije cene školarina i bolju infrastrukturu na fakultetima.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h4 className="font-bold text-lg mb-2">4. Transparentnost finansiranja</h4>
                <p>Insistiramo na potpunoj transparentnosti u finansiranju visokog obrazovanja i pravednijoj raspodeli budžetskih sredstava.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-4 py-2">
                <h4 className="font-bold text-lg mb-2">5. Zaustavljanje odliva mozgova</h4>
                <p>Tražimo konkretne mere za zaustavljanje odliva mladih stručnjaka iz zemlje, kroz bolje uslove za zapošljavanje i profesionalni razvoj.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support section */}
        <section id="podrska" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">Podrška</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kako možeš podržati protest?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Heart className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p><strong>Pridruži se protestu</strong> - Dođi na sledeće okupljanje i pokaži solidarnost sa studentima.</p>
                </li>
                <li className="flex items-start">
                  <Heart className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p><strong>Podeli na društvenim mrežama</strong> - Koristi hashtag #ZaplanjePumpaj i proširi glas o našoj borbi.</p>
                </li>
                <li className="flex items-start">
                  <Heart className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p><strong>Volontiraj</strong> - Pomozi nam u organizaciji protesta, izradi materijala ili logistici.</p>
                </li>
                <li className="flex items-start">
                  <Heart className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <p><strong>Doniraj</strong> - Svaka donacija pomaže u nabavci materijala za protest i organizaciji događaja.</p>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#kontakt" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Kontaktiraj nas
                </a>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Reči podrške</h3>
              <div className="space-y-4">
                <blockquote className="italic border-l-4 border-red-600 pl-4 py-2">
                  "Studenti su uvek bili pokretači promena u društvu. Podržavam vašu borbu za bolje obrazovanje i bolju budućnost Srbije."
                  <footer className="text-gray-600 mt-2">— Prof. dr Marko Petrović, Univerzitet u Beogradu</footer>
                </blockquote>
                <blockquote className="italic border-l-4 border-red-600 pl-4 py-2">
                  "Vaša energija i odlučnost su inspiracija za sve nas. Nastavite da se borite za svoja prava!"
                  <footer className="text-gray-600 mt-2">— Ana Jovanović, novinarka</footer>
                </blockquote>
                <blockquote className="italic border-l-4 border-red-600 pl-4 py-2">
                  "Kao bivši student i aktivista, razumem važnost vaše borbe. Imate moju punu podršku."
                  <footer className="text-gray-600 mt-2">— Nikola Đorđević, pisac</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="kontakt" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Imaš pitanje ili želiš da se pridružiš protestu? Kontaktiraj nas putem forme ili direktno na naše kontakte.</p>
              <div className="space-y-3 mb-6">
                <p className="flex items-center">
                  <span className="font-bold mr-2">Email:</span> kontakt@zaplanje-pumpaj.rs
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">Telefon:</span> +381 11 123 4567
                </p>
                <p className="flex items-center">
                  <span className="font-bold mr-2">Adresa:</span> Studentski trg 1, Beograd
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Pratite nas:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-red-600 hover:text-red-800">Instagram</a>
                  <a href="#" className="text-red-600 hover:text-red-800">Facebook</a>
                  <a href="#" className="text-red-600 hover:text-red-800">Twitter</a>
                  <a href="#" className="text-red-600 hover:text-red-800">Telegram</a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ime i prezime</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Unesite vaše ime i prezime"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email adresa</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Unesite vašu email adresu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Poruka</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Unesite vašu poruku"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Upcoming events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">Predstojeći događaji</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white py-2 px-4">
                <p className="font-bold">25. Jun 2025.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Veliki marš solidarnosti</h3>
                <p className="mb-3">Studentski trg, Beograd</p>
                <p className="text-sm">Pridružite nam se u velikom maršu solidarnosti koji će proći centralnim ulicama Beograda. Okupljanje počinje u 16:00 časova.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white py-2 px-4">
                <p className="font-bold">28. Jun 2025.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Tribina: Budućnost obrazovanja</h3>
                <p className="mb-3">Filozofski fakultet, Novi Sad</p>
                <p className="text-sm">Otvorena diskusija o budućnosti visokog obrazovanja u Srbiji sa eminentnim stručnjacima i studentskim predstavnicima.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-red-600 text-white py-2 px-4">
                <p className="font-bold">1. Jul 2025.</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Nacionalni studentski skup</h3>
                <p className="mb-3">Trg slobode, Niš</p>
                <p className="text-sm">Veliki skup studenata iz cele Srbije sa ciljem ujedinjavanja studentskih zahteva i planiranja daljih akcija.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ZAPLANJE-PUMPAJ!</h3>
              <p className="mb-4">Studentski pokret za bolju budućnost obrazovanja u Srbiji.</p>
              <p className="text-sm">&copy; 2025 Zaplanje-Pumpaj. Sva prava zadržana.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Brzi linkovi</h3>
              <ul className="space-y-2">
                <li><a href="#o-protestu" className="hover:text-red-400 transition duration-300">O Protestu</a></li>
                <li><a href="#galerija" className="hover:text-red-400 transition duration-300">Galerija</a></li>
                <li><a href="#zahtevi" className="hover:text-red-400 transition duration-300">Zahtevi</a></li>
                <li><a href="#podrska" className="hover:text-red-400 transition duration-300">Podrška</a></li>
                <li><a href="#kontakt" className="hover:text-red-400 transition duration-300">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Pridruži se pokretu</h3>
              <p className="mb-4">Ostavi nam svoju email adresu da te obaveštavamo o novostima i akcijama.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="tvoj@email.com" 
                  className="px-4 py-2 rounded-l text-gray-900 focus:outline-none flex-grow"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r transition duration-300">
                  Prijavi se
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
