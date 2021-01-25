import Head from 'next/head';
import Logo from '../assets/sun.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <Logo />
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
