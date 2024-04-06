import { useState } from "react";
import { ColorInputs } from '@/containers/ColorInputs'
import { Plus } from "@/components/icons";

export default function Home() {
  const [numberColorInputs, setNumberColorInputs] = useState(1);
  const colorInputs = Array.from({ length: numberColorInputs });

  const handleAddColor = () => {
    setNumberColorInputs(numberColorInputs + 1)
  }


  return (
    <main className="container mx-auto w-3/6">
      {colorInputs.map((_, index) =>
        <div key={index}>
          <ColorInputs />
          <div className="divider" />
        </div>
      )}

      <div className="fixed bottom-5 right-5">
        <button className="btn btn-neutral btn-circle" onClick={handleAddColor}>
          <Plus />
        </button>
      </div>
    </main>
  );
}
