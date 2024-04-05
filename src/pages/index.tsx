import { transparentize } from "polished";

import { InputSection } from "@/components/input-section";
import { useState } from "react";
import { hexify } from "@/utils/hexify";
import { isValidHexColor } from "@/utils/isValidHexColor";

export default function Home() {
  const [hexColor, setHexColor] = useState("");
  const [percentages, setPercentages] = useState<number[]>([]);

  const onGenerateColors = (values: number[]) => {
    setPercentages(values);
  };

  const onHexColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHexColor(e.target.value);
  };

  return (
    <main className="container mx-auto w-3/6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          Source color
          <input
            placeholder="Source color"
            className="input input-md input-bordered input-accent"
            onChange={onHexColorChange}
          />
        </div>

        <InputSection onGenerateColors={onGenerateColors} />
      </div>

      <div className="flex flex-col gap-5 mt-5">
        {isValidHexColor(hexColor) && (
          <div
            className="w-36 h-36 p-2 rounded-lg"
            style={{ backgroundColor: hexColor }}
          >
            Source color - {hexColor}
          </div>
        )}
        <div className="flex flex-wrap gap-5">
          {percentages.map((percentage, index) => {
            const percentageValue = isNaN(percentage) ? 0 : percentage;

            const per = percentageValue / 100;
            const bgColor = hexify(transparentize(1 - per, hexColor));

            return (
              <div
                key={`polished-${index}`}
                className="w-36 h-36 p-2 rounded-lg"
                style={{ backgroundColor: bgColor }}
              >
                {percentageValue}% - {bgColor}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
