import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 bg-red-300 relative">
      <Image className="mx-auto object-contain"fill={true} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10" alt="" />
      I am home
    </div>
  );
}
