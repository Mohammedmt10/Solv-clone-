import Hero from "@/app/components/HeroElement";
import NavBar from "@/app/components/NavBar";
export default function Page1() {
  return <div>
    <div className="bg-[url(./images/firstBackground.png)] h-screen w-full pt-10 px-10 flex flex-col justify-between pb-10">
      <NavBar />
      <Hero />
  </div>
  </div>
}
