export default function NickSuMortgagesHomepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
              Vancouver Mortgage Advisor
            </p>

            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6">
              Nick Su
              <span className="block font-semibold mt-2">Mortgages</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl mb-10">
              Personalized mortgage solutions for homebuyers, investors,
              and self-employed clients across British Columbia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl text-sm tracking-wide font-medium hover:bg-gray-200 transition">
                Book a Consultation
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-2xl text-sm tracking-wide font-medium hover:bg-white/10 transition">
                Get Pre-Approved
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[360px] h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                alt="Mortgage Broker"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-xl font-semibold">Nick Su</p>
                <p className="text-gray-300 text-sm mt-1">
                  Mortgage Advisor • British Columbia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
            Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-light">
            Mortgage Solutions Designed Around Your Goals
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'First-Time Buyers',
              text: 'Clear guidance from pre-approval to closing.',
            },
            {
              title: 'Self-Employed Clients',
              text: 'Mortgage strategies for business owners and contractors.',
            },
            {
              title: 'Refinancing',
              text: 'Access equity and improve financial flexibility.',
            },
            {
              title: 'Investment Properties',
              text: 'Solutions for rental and investment property financing.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
              alt="Luxury Vancouver Real Estate"
              className="rounded-[32px] shadow-2xl object-cover h-[500px] w-full"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              About
            </p>

            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
              Mortgage Advice With Strategy, Clarity, and Precision
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I help clients navigate mortgage financing with a focus on
              transparency, responsiveness, and long-term financial strategy.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether you are purchasing your first home, refinancing an
              existing property, or structuring financing as a self-employed
              borrower, every mortgage solution is tailored to your situation.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-4xl font-semibold">BC</p>
                <p className="text-gray-500 mt-2">Serving Clients Across British Columbia</p>
              </div>

              <div>
                <p className="text-4xl font-semibold">EN / 中文</p>
                <p className="text-gray-500 mt-2">Bilingual Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
            Start Your Mortgage Journey
          </p>

          <h2 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
            Let’s Build a Mortgage Strategy That Works for You
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Schedule a consultation to discuss your mortgage goals,
            financing options, and next steps.
          </p>

          <button className="bg-white text-black px-10 py-5 rounded-2xl text-sm tracking-wide font-medium hover:bg-gray-200 transition">
            Contact Nick Su
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-semibold text-lg">Nick Su Mortgages</p>
            <p className="text-gray-500 text-sm mt-1">
              Mortgage Solutions Across British Columbia
            </p>
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>Email: your@email.com</p>
            <p>Phone: (604) 000-0000</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
