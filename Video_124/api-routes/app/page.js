"use client";

export default function Home() {

  const handleClick = async () => {
    const data = {
      name: "Ashutosh",
      role: "coder",
    };

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">This is api routes</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}