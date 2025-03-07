// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mon Portfolio</title>
        <meta name="description" content="Portfolio de [Ton Nom]" />
      </Head>
      <header>
        <h1>Bienvenue sur mon Portfolio</h1>
        <nav>
          <Link href="/about">À propos</Link> | <Link href="/projects">Projets</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>
        <p>Je suis développeur web spécialisé en React et Next.js.</p>
      </main>
    </div>
  );
}
