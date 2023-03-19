import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    
    <div>
      <h1>Click on any of the tests</h1>
      <Link href="/test1">
        <button>Test1</button>
      </Link>
      <br/>
      <br/>
      <Link href="/test2">
      <button>Test2</button>
      </Link>
    </div>
  );
}
