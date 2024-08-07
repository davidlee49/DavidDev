import Image from "next/image";
import Card from './components/card/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        David Dev
        <Card src/>
      </div>
    </main>
  );
}
