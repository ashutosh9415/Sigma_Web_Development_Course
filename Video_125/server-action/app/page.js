"rse client"
import { submitAction } from "@/actions/form";

export default function Home() {
  return (
    <div className="w-2/3 mx-auto my-10">
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" id="name" className="text-white" type="text" />
        </div>
        <div>
          <label htmlFor="add">Adderss: </label>
          <input name="add" id="add" className="text-white" type="text" />
        </div>
        <div>
          <button >submit</button>
        </div>
      </form>
    </div>
  );
}
