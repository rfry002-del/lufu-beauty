import Image from 'next/image'
import Link from 'next/link'
import { ASSETS, AMAZON_URL, Newsletter, PageShell, ProductCard } from '@/components/lufu-site'

export default function Home() {
  return <PageShell><main>
    <section className="min-h-[calc(100vh-100px)] grid md:grid-cols-2 bg-[#F5E6E0]">
      <div className="relative flex items-center px-8 py-16 md:px-16 lg:px-24">

        <div className="max-w-xl animate-fade-up">

          <div className="flex items-center gap-4 mb-7">
            <span className="w-10 h-px bg-[#D4AF37]" />

            <p className="text-xs tracking-[0.35em] uppercase">
              Introducing LUFU Beauty
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl leading-[0.9] mb-7">
            Beauty,
            <br />
            <em className="font-normal">redefined.</em>
          </h1>

          <p className="text-lg leading-7 max-w-md mb-9 animate-fade-up-delay">
            Premium, effortless everyday beauty designed to meet you exactly where you are.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">
              Explore our collection
            </Link>

            <a
              href={AMAZON_URL}
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Shop on Amazon
            </a>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 hidden md:block">
          <a
            href="#collection"
            className="flex items-center gap-3 text-[9px] tracking-[0.28em] uppercase text-[#766B65] transition-colors duration-300 hover:text-[#D4AF37]"
          >
            <span className="h-8 w-px bg-[#D4AF37]" />
            Scroll to discover
          </a>
        </div>

      </div>

      <div className="relative min-h-[520px] bg-[#FEFDFB] overflow-hidden">
        <video
          src="/images/lipoil.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-label="LUFU Beauty Lip Oil video"
        />

        <div className="absolute inset-0 bg-[#F5E6E0]/10 pointer-events-none" />

        {/* Product badge */}
        <div className="absolute top-8 right-8 z-10">
          <div className="bg-white/80 backdrop-blur-md border border-white/50 px-5 py-3 shadow-sm">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#8E776A]">
              New
            </p>

            <p className="text-sm mt-1">
              Lip Oil · Light Pink
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
      <Image
        src="/images/lipoil2.avif"
        alt="LUFU Beauty Lip Oil"
        width={90}
        height={90}
        className="mx-auto mb-8 object-contain"
      />
      <p className="text-3xl md:text-5xl leading-tight">“Beauty should feel personal, effortless, and empowering.”</p><p className="mt-7 text-sm leading-6 text-[#6B625E] max-w-lg mx-auto">LUFU Beauty is made for the rituals that become yours. Thoughtful essentials, created with intention, for the confidence you carry everywhere.</p></section>
    <section
      id="collection"
      className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24"
    ><div className="flex items-end justify-between mb-12"><div><p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#8E776A]">The collection</p><h2 className="section-title mb-0">We think you'll like</h2></div><Link href="/products" className="hidden sm:block nav-link">View all →</Link></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 max-w-4xl">
        <ProductCard
          slug="lip-oil"
          image="/images/lipoil.avif"
        />

        <ProductCard
          slug="moisturizer"
          image="/images/moisturizer.avif"
        />
      </div>
    </section>
    <section className="bg-[#F8F6F4] px-6 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#8E776A]">
          Coming next
        </p>

        <h2 className="section-title">
          More to love, soon.
        </h2>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {[
            {
              name: 'Foundation',
              description: 'Effortless coverage designed for a smooth, natural-looking finish.',
            },
            {
              name: 'Blush',
              description: 'A touch of color designed to bring a fresh, natural-looking glow.',
            },
            {
              name: 'Concealer',
              description: 'Lightweight coverage designed to brighten and perfect your everyday look.',
            },
          ].map((product) => (
            <div
              key={product.name}
              className="
    group relative overflow-hidden
    min-h-[300px]
    border border-[#E4DCD7]
    bg-white/50
    p-8 md:p-9
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:border-[#D4AF37]
    hover:bg-white
    hover:shadow-[0_20px_60px_rgba(40,30,25,0.08)]
  "
            >
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#8E776A] mb-5">
                Coming Soon
              </p>

              <h3 className="text-3xl md:text-4xl mb-4">
                {product.name}
              </h3>

              <p className="text-sm leading-6 text-[#6B625E] max-w-xs">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#8E776A]">
            The LUFU difference
          </p>

          <h2 className="section-title">
            Beauty with intention.
          </h2>

          <p className="text-lg leading-8 mb-8">
            From thoughtful product development to the simplest daily ritual,
            we put quality, confidence, and you at the center of everything we do.
          </p>

          <div className="grid grid-cols-2 gap-y-8">
            {[
              'Quality first',
              'Thoughtful development',
              'Everyday simplicity',
              'A global vision'
            ].map((x, i) => (
              <div key={x}>
                <span className="text-[#D4AF37] text-2xl">
                  0{i + 1}
                </span>
                <p className="text-sm mt-2">{x}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-[4/5] bg-[#F5E6E0] relative overflow-hidden">
          <img
            src="/images/moisturizer2.avif"
            alt="LUFU Beauty product detail"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>

      </div>
    </section>
    {/* FREQUENTLY ASKED QUESTIONS */}
    <section
      id="faq"
      className="bg-[#F8F6F4] px-6 py-20 md:py-28 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8E776A] mb-4">
            Need to know
          </p>

          <h2 className="text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-[#6B625E] mt-4 max-w-xl mx-auto">
            Everything you need to know about LUFU Beauty and our products.
          </p>
        </div>

        <div className="border-t border-[#DDD3CE]">

          {[
            {
              question: 'Where can I purchase LUFU Beauty products?',
              answer:
                'LUFU Beauty products will be available through Amazon. Use the “Buy on Amazon” button on each product page to visit the corresponding Amazon listing.'
            },
            {
              question: 'Does LUFU Beauty sell products directly from this website?',
              answer:
                'Not at this time. Our website is designed to help you discover LUFU Beauty products, learn more about them, and conveniently continue your purchase through Amazon.'
            },
            {
              question: 'Where can I find product ingredients?',
              answer:
                'Complete ingredient information is available on each individual product page. We encourage you to review the ingredient list before using a product.'
            },
            {
              question: 'How do I use LUFU Beauty products?',
              answer:
                'Each product page includes recommended directions for use, along with product benefits, ingredients, size, and other important information.'
            },
            {
              question: 'Are more LUFU Beauty products coming?',
              answer:
                'Yes. LUFU Beauty is continuing to develop its collection. Upcoming products will be introduced on our website as they become available.'
            },
            {
              question: 'How can I contact LUFU Beauty?',
              answer:
                'You can reach us through the Contact page or email us at lufubeauty1@gmail.com.'
            }
          ].map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-[#DDD3CE]"
            >
              <summary
                className="
              flex
              cursor-pointer
              list-none
              items-center
              justify-between
              gap-6
              py-6
              text-lg
              md:text-xl
              font-medium
            "
              >
                {faq.question}

                <span
                  className="
                text-[#D4AF37]
                text-2xl
                font-light
                transition-transform
                duration-300
                group-open:rotate-45
              "
                >
                  +
                </span>
              </summary>

              <div className="pb-6 pr-10">
                <p className="max-w-2xl text-sm md:text-base leading-7 text-[#6B625E]">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}

        </div>
      </div>
    </section>
    <section className="bg-[#1A1A1A] text-[#FEFDFB] px-6 py-28 text-center"><p className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-6">A LUFU state of mind</p><h2 className="text-6xl md:text-8xl leading-none">Beauty.<br />Confidence.<br /><em className="font-normal text-[#D4AF37]">You.</em></h2></section><Newsletter />
  </main></PageShell>
}
