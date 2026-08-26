import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";

const features = [
  { number: "01", title: "Ideias que respiram", text: "Um espaço calmo para tirar projetos do papel e dar forma ao que ainda está só na sua cabeça.", icon: "✦" },
  { number: "02", title: "Ritmo sem ruído", text: "Organize o que importa, elimine distrações e encontre um jeito mais leve de avançar.", icon: "◌" },
  { number: "03", title: "Feito para compartilhar", text: "Transforme pensamentos em algo que sua equipe, seus clientes e o mundo possam sentir.", icon: "↗" },
  { number: "04", title: "Espaço para o inesperado", text: "Deixe as conexões acontecerem e descubra novas possibilidades no caminho.", icon: "＋" },
];

export default function Home() {
  return <main>
    <header className="site-header"><Link className="brand" href="/" aria-label="Mosaico, início"><span>m</span> mosaico</Link><nav aria-label="Navegação principal"><Link href="#manifesto">Manifesto</Link><Link href="#como-funciona">Como funciona</Link><Link href="#contato">Contato</Link></nav><Link className="header-cta" href="#contato">Entrar na lista <span aria-hidden="true">↗</span></Link></header>
    <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Um novo jeito de criar</p><h1 id="hero-title">Faça espaço para o <em>extraordinário.</em></h1><p className="hero-text">Mosaico é o lugar onde boas ideias encontram clareza, intenção e movimento. Em breve, para quem quer criar com mais presença.</p><Link className="primary-cta" href="#contato">Conheça o mosaico <span aria-hidden="true">↗</span></Link></div><div className="hero-art"><Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85" alt="Equipe reunida em uma mesa criativa" fill priority sizes="(max-width: 900px) 100vw, 50vw" /><div className="art-caption"><span>01 / 04</span><span>Ideias em movimento</span></div></div></section>
    <section className="manifesto section-rule" id="manifesto"><div className="section-label">[ manifesto ]</div><div className="manifesto-content"><h2>O mundo não precisa de mais pressa. <em>Precisa de mais intenção.</em></h2><p>Vivemos entre abas abertas e pensamentos interrompidos. O mosaico nasce de uma pergunta simples: e se criar pudesse ser mais sobre observar, conectar e escolher?</p></div></section>
    <section className="features" id="como-funciona" aria-labelledby="features-title"><div className="section-heading"><p className="eyebrow">O que nos move</p><h2 id="features-title">Menos fórmula.<br /><em>Mais você.</em></h2></div><div className="feature-list">{features.map((feature) => <article className="feature" key={feature.number}><div className="feature-top"><span>{feature.number}</span><strong>{feature.icon}</strong></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
    <section className="quote-section"><div className="quote-mark">“</div><blockquote>A criatividade não é um dom distante. É um lugar que você pode escolher visitar todos os dias.</blockquote><p>— O manifesto mosaico</p></section>
    <section className="contact section-rule" id="contato"><div className="section-label">[ seja parte ]</div><div className="contact-content"><h2>Tem uma ideia<br />pulsando aí?</h2><p>Estamos preparando algo especial para quem acredita que o jeito de fazer importa tanto quanto o que se faz.</p><WaitlistForm /></div></section>
    <footer className="site-footer"><Link className="brand" href="/"><span>m</span> mosaico</Link><p>Um espaço para ideias com intenção.</p><a className="footer-contact" href="mailto:hello@mosaico.studio">hello@mosaico.studio</a><p>© 2025 mosaico</p></footer>
  </main>;
}
