import { useState } from "react";
import SelectBar from "./SelectBar";
import Taskscontainer from "./Taskscontainer";
import { SortType } from "@/types/types";



function Body() {
  const [sort, setSort] = useState<SortType>(SortType.packed)
  return (
    <div className="md:col-span-2 space-y-6">
      <SelectBar sort={sort} setSort={setSort}/>
      <Taskscontainer sort={sort}/>
    </div>
  );
}

export default Body