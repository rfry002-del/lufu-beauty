'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const AMAZON_URL = 'https://www.amazon.com'

export const ASSETS = {
  logo: '/images/logo.png',

  // Lip Oil
  lipOil: '/images/lipoil.avif',
  lipOil2: '/images/lipoil2.avif',
  lipOil3: '/images/lipoil3.avif',
  lipOil4: '/images/lipoil4.jpg',
  lipOilBack: '/images/lipoilback.avif',
  lipOilVideo: '/images/lipoil.mp4',

  // Moisturizer
  moisturizer: '/images/moisturizer.avif',
  moisturizer2: '/images/moisturizer2.avif',
  moisturizerVideo: '/images/moisturizer.mp4',

  // Fallback
  fallback: '/images/placeholder.jpg',
}

const nav = [
  ['Our Story', '/story'],
  ['Products', '/products'],
  ['Our Philosophy', '/philosophy'],
  ['FAQ', '/#faq'],
  ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="bg-[#1A1A1A] text-[#FEFDFB] text-center text-[10px] tracking-[0.25em] uppercase py-2">Free shipping on orders over $50</div>
    <header className="sticky top-0 z-40 bg-[#FEFDFB]/95 backdrop-blur border-b border-[#E8D7CE]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" aria-label="LUFU Beauty home"><Image src={ASSETS.logo} alt="LUFU Beauty" width={92} height={72} className="object-contain h-12 w-auto" /></Link>
        <nav className="hidden lg:flex items-center gap-8">{nav.map(([label, href]) => <Link className="nav-link" href={href} key={href}>{label}</Link>)}</nav>
        <div className="flex items-center gap-4"><a href={AMAZON_URL} className="btn-accent hidden sm:inline-block" target="_blank" rel="noreferrer">Shop on Amazon</a><button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span className="text-2xl">{open ? '×' : '☰'}</span></button></div>
      </div>
      {open && <nav className="lg:hidden px-6 pb-6 flex flex-col gap-5">{nav.map(([label, href]) => <Link onClick={() => setOpen(false)} className="nav-link" href={href} key={href}>{label}</Link>)}<a href={AMAZON_URL} className="btn-accent text-center" target="_blank" rel="noreferrer">Shop on Amazon</a></nav>}
    </header>
  </>
}

export function Footer() { return <footer className="bg-[#1A1A1A] text-[#FEFDFB] px-6 pt-16 pb-8"><div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12"><div><Image src={ASSETS.logo} alt="LUFU Beauty" width={100} height={80} className="object-contain brightness-0 invert mb-5" /><p className="text-sm leading-6 text-[#E8D7CE]">Beauty for Every Day.<br />Confidence for Everywhere.</p></div><div><h3 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-5">Explore</h3><div className="flex flex-col gap-3 text-sm">{[['Home', '/'], ...nav].map(([l, h]) => <Link href={h} key={h} className="hover:text-[#D4AF37] transition-colors">{l}</Link>)}</div></div><div><h3 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-5">Connect</h3><div className="flex flex-col gap-3 text-sm"><a href="https://www.instagram.com/lufubeauty" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.tiktok.com/@lufubeauty" target="_blank" rel="noreferrer">TikTok</a><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a><a href="mailto:lufubeauty1@gmail.com">lufubeauty1@gmail.com</a></div></div><div><h3 className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-5">Visit</h3><p className="text-sm leading-7 text-[#E8D7CE]">United States<br />(540) 892-4071<br /><br /><a href={AMAZON_URL} target="_blank" rel="noreferrer" className="text-[#D4AF37]">Shop on Amazon →</a></p></div></div><div className="max-w-7xl mx-auto border-t border-[#4A403C] mt-14 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-wider text-[#B9AAA4]"><span>© 2026 LUFU Beauty. All rights reserved.</span><span>Privacy Policy · Terms & Conditions · Cookie Policy · Accessibility</span></div></footer> }

export function Newsletter() { const [email, setEmail] = useState(''); const [sent, setSent] = useState(false); return <section className="bg-[#F5E6E0] px-6 py-20 text-center"><p className="text-xs tracking-[0.3em] uppercase mb-4">Stay in the know</p><h2 className="text-4xl mb-4">A little beauty, delivered.</h2><p className="max-w-md mx-auto text-sm leading-6 mb-8">Join our community for new launches, beauty notes, and a little inspiration for every day.</p>{sent ? <p className="text-sm font-medium">Thank you for joining LUFU.</p> : <form className="max-w-md mx-auto flex border-b border-[#2D2D2D]" onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSent(true) }}><input aria-label="Email address" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" className="bg-transparent flex-1 py-3 outline-none text-sm" /><button className="text-xs tracking-widest uppercase py-3" type="submit">Subscribe →</button></form>}</section> }

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }

export const products = {
  'lip-oil': {
    name: 'Lip Oil',
    size: '0.2 fl oz / 6ml',
    color: 'Light Pink',

    image: '/images/lipoil.avif',

    images: [
      '/images/lipoil.avif',

      '/images/lipoil4.jpg',
      '/images/lipoilback.avif',
    ],

    video: '/images/lipoil.mp4',

    benefits: [
      'Light pink shade flatters all skin tones for a natural, everyday look.',
      'Lightweight, silky texture glides on effortlessly without drying out lips.',
      'Delivers a soft dewy finish with long-lasting color payoff.',
      'Moisturizes and smooths lip texture for fuller-looking lips.',
      'Non-sticky formula stays comfortable and complements any makeup style.',
    ],

    how:
      'Apply this hydrating lip gloss over bare lips or on top of your favorite lip color.',

    ingredients:
      'Diisostearyl Malate, Polyisobutene, Squalane, Simmondsia Chinensis Seed Oil, Dextrin Palmitate, Butyrospermum Parkii Butter, Octyldodecanol, Camellia Japonica Seed Oil, Dimethylsilylated Silica, Tocopherol, Avena Sativa Kernel Oil, Bisabolol, Helianthus Annuus Seed Oil, Ricinus Communis Seed Oil, Parfum, Sodium Hyaluronate, Hydrogenated Castor Oil, CI 45380, CI 77891, CI 19140, Triethoxyoctylsilane, Aluminum Hydroxide.',

    caution:
      'For external use only. Do not ingest. Avoid contact with eyes. Discontinue use immediately if skin irritation, redness or allergy occurs. Keep out of reach of children. Store in a cool, dry place away from direct sunlight and high temperature.',
  },

  moisturizer: {
    name: 'Moisturizer',
    size: '2.54 fl oz / 75ml',
    color: 'White · Fragrance-Free',

    image: '/images/moisturizer.avif',

    images: [
      '/images/moisturizer.avif',
      '/images/moisturizer2.avif',
    ],

    video: '/images/moisturizer.mp4',

    benefits: [
      'Deeply hydrates and smooths the skin.',
      'Helps minimize the appearance of fine dry lines.',
      'Creates a smooth, hydrated base before makeup.',
      'Helps prevent foundation from appearing dry or cakey.',
      'Designed for both face and body use.',
    ],

    how:
      'After cleansing and toning, take an appropriate amount of moisturizer. Apply evenly to your face and gently pat until fully absorbed. Allow it to absorb before makeup application to create a smooth, hydrated base.',

    ingredients:
      'Aqua, Glycerin, Butyrospermum Parkii Fruit Fat, Cocos Nucifera Oil, Simmondsia Chinensis Seed Oil, Sucrose Polystearate, Euglena Gracilis Polysaccharide, 4-Hydroxyacetophenone, Niacinamide, Phenoxyethanol, Pentylene Glycol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Panthenol, Ascorbic Acid, Tocopherol, Aloe Barbadensis Leaf Extract.',

    caution:
      'For external use only. Avoid contact with eyes. Keep out of reach of children. Discontinue use immediately if redness, itching or irritation occurs. Store in a cool, dry place away from direct sunlight.',
  },
}

export function ProductCard({
  slug,
  coming = false,
}: {
  slug: string
  coming?: boolean
}) {
  const p = products[slug as keyof typeof products] ?? products['lip-oil']
  const productImage = p.image

  return (
    <article className="group w-full max-w-[290px]">
      
      {/* IMAGE CARD */}
      <Link
        href={coming ? '#' : `/products/${slug}`}
        className={coming ? 'pointer-events-none' : ''}
      >
        <div
          className="
            relative
            h-[330px]
            w-full
            overflow-hidden
            rounded-xl
            bg-[#F7F4F2]
            flex
            items-center
            justify-center
          "
        >
          <img
            src={productImage}
            alt={`${p.name} - LUFU Beauty`}
            className="
              h-[78%]
              w-[78%]
              object-contain
              transition-transform
              duration-500
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {coming && (
            <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
              <span className="bg-white px-4 py-2 text-[11px] tracking-[0.2em] uppercase">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* PRODUCT INFORMATION */}
      <div className="pt-2">
        <p className="text-[13px] font-bold tracking-wide">
          LUFU BEAUTY
        </p>

        <Link href={`/products/${slug}`}>
          <h3 className="text-[17px] leading-5 mt-1 font-medium hover:underline">
            {p.name}
          </h3>
        </Link>

        <p className="text-[13px] text-[#6B625E] mt-1">
          {p.size} · {p.color}
        </p>

        <p className="text-[14px] leading-5 mt-2 line-clamp-2">
          {p.benefits[0]}
        </p>

        {!coming && (
<div className="mt-4 flex items-center gap-4">
  <a
    href={AMAZON_URL}
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex items-center justify-center
      rounded-full bg-[#1A1A1A]
      px-6 py-2.5
      text-[13px] font-semibold text-white
      transition-all duration-300
      hover:bg-[#D4AF37] hover:text-black
    "
  >
    Buy on Amazon
  </a>

  <Link
    href={`/products/${slug}`}
    className="
      text-[12px]
      font-medium
      tracking-[0.08em]
      uppercase
      border-b
      border-[#1A1A1A]
      pb-1
      transition-colors
      hover:text-[#D4AF37]
      hover:border-[#D4AF37]
    "
  >
    View Details
  </Link>
</div>
        )}
      </div>
    </article>
  )
}

export function ProductPage({
  product,
}: {
  product: keyof typeof products
}) {
  const p = products[product]

  if (!p) return null

  return (
    <PageShell>
      <main>
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* PRODUCT MEDIA */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Main product image */}
            <div className="col-span-2 aspect-square relative">
              <Image
                src={p.image}
                alt={`${p.name} - LUFU Beauty`}
                fill
                className="object-contain p-6"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product video */}
            {p.video && (
              <div className="aspect-square bg-[#F5E6E0] relative overflow-hidden">
                <video
                  src={p.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                  aria-label={`${p.name} product video`}
                />
              </div>
            )}

            {/* Second product image */}
            {p.images?.[1] && (
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={p.images[1]}
                  alt={`${p.name} product detail`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            )}

            {/* Additional images */}
            {p.images?.slice(2).map((image, index) => (
              <div
                key={image}
                className="aspect-square relative overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${p.name} product view ${index + 3}`}
                  fill
                  className="object-contain p-4 transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="md:pt-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#8E776A] mb-5">
              LUFU Beauty
            </p>

            <h1 className="text-5xl md:text-6xl mb-5">
              {p.name}
            </h1>

            <p className="text-sm leading-7 border-y border-[#E8D7CE] py-4 mb-8">
              {p.size}
              <br />
              {p.color}
            </p>

            <h2 className="text-2xl mb-4">
              Made for every day.
            </h2>

            <ul className="space-y-3 text-sm leading-6 mb-8">
              {p.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="text-[#D4AF37]">✦</span>
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-block w-full text-center"
            >
              Buy on Amazon
            </a>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#E8D7CE] grid md:grid-cols-3 gap-10">
          
          <div>
            <h3 className="text-xl mb-3">How to use</h3>
            <p className="text-sm leading-7">
              {p.how}
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">Ingredients</h3>
            <p className="text-xs leading-6 text-[#6B625E]">
              {p.ingredients}
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">Caution</h3>
            <p className="text-xs leading-6 text-[#6B625E]">
              {p.caution}
            </p>
          </div>

        </section>
      </main>
    </PageShell>
  )
}

export function ContactForm() { const [sent, setSent] = useState(false); return sent ? <div className="bg-[#F5E6E0] p-8"><h2 className="text-2xl mb-2">Thank you for reaching out.</h2><p className="text-sm">Your message has been noted. We&apos;ll be in touch soon.</p></div> : <form className="space-y-5" onSubmit={e => { e.preventDefault(); setSent(true) }}><div className="grid sm:grid-cols-2 gap-5"><label className="text-xs tracking-widest uppercase">Name<input required className="form-input" /></label><label className="text-xs tracking-widest uppercase">Email<input required type="email" className="form-input" /></label></div><label className="text-xs tracking-widest uppercase">Phone <span className="normal-case tracking-normal text-[#8E776A]">(optional)</span><input className="form-input" /></label><label className="text-xs tracking-widest uppercase">Subject<input required className="form-input" /></label><label className="text-xs tracking-widest uppercase">Message<textarea required rows={5} className="form-input resize-none" /></label><button className="btn-primary" type="submit">Send message</button></form> }
