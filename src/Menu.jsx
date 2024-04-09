import MenueItems from "./MenuItems";

function Menu({items}){
    return(
        <div className='section-center'>
           {items.map((item)=>{
            return <MenueItems key={item.id} {...item} />
           })}
        </div>
    )
}

export default Menu;