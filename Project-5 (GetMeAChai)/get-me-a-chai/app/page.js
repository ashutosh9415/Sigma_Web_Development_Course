import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[40vh] bg-[url('/items/bg.png')] bg-cover bg-center bg-no-repeat py-2 text-white">
        <div className="font-bold text-6xl mb-2 flex justify-center items-center gap-2">GetMeAChai <span><img className="invertImg" src="/coffee.gif" width={45} alt="" /></span></div>
        <p>Get your favorite chai, at your favorite place!</p>
        <div className="gap-4 mt-4 flex flex-col sm:flex-row justify-center items-center">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-3 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2.5 text-center leading-5">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
      
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold text-center mb-14">Learn More About GetMeAChai</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/or-QP9xGsI0?si=K5rA_jsmFObN1aL9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </>
  );
}
