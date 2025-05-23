import Image from "next/image";
import patternHill from "@/public/assets/pattern-hills.svg"

export default function MountainSilhouette() {
  return (
    <div className="relative w-full h-28 sm:h-32 md:h-40 overflow-hidden">

      <Image
       width={100}
       height={100}
       src={patternHill}
       alt="Image hill"
       className ="w-full h-full"
      />
  
    </div>
  );
}
