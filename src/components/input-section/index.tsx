import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const MAX_NUM = 100;

type InputSectionProps = {
  onGenerateColors: (value: number[]) => void;
};

export const InputSection = ({ onGenerateColors }: InputSectionProps) => {
  const [inputs, setInputs] = useState<any[]>([undefined]);
  const [values] = useDebounce(inputs, 300);

  useEffect(() => {
    const inputsWithValue = values.filter((input) => input !== undefined);
    onGenerateColors(inputsWithValue);
  }, [values]);

  const handleClick = () => {
    setInputs([...inputs, undefined]);
  };

  const handleInputChange = (index: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value);
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    };
  };

  return (
    <div className="flex flex-col gap-3">
      <label>Opacities</label>
      <div className="flex flex-wrap gap-3">
        {inputs.map((_: any, index: number) => (
          <div key={index}>
            <input
              placeholder="%"
              type="number"
              max={MAX_NUM}
              className="input input-md input-bordered input-accent w-full"
              onChange={handleInputChange(index)}
            />
          </div>
        ))}

        <button className="btn btn-neutral" onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};
