import React from "react";

import CardComponent from "../cards/cardComponent";
import info from "../../../../public/myJSON/skills.json";
function SkillSection() {
  let skilInformation = info;

  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        skills
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {info.map(
          (data: { image: string; skillValue: string }, idx: number) => (
            <CardComponent
              key={idx}
              image={data.image}
              skillValue={data.skillValue}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SkillSection;
