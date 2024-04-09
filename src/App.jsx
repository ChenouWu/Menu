import { useState } from "react";
import Title from "./title";
import menu from'./data';
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {

  const [menu1,setMenu] = useState(menu);

  const categories = menu.map((items)=>items.category);
  const tem = new Set(categories);
  const Allcategor = ["all",...tem];
  const [categor,setAllcategor] = useState(Allcategor);

  return (
    <div className="menu">
    <Title text ="Our Menu"/>
    <Categories categories={categor}/>
    <Menu items={menu1}/>
    </div>
  )
};


export default App;
