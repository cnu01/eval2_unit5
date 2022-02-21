import {Button} from "./Button"
import "./NavbarBt.css"
export const NavbarButtons = ()=>{
    return(
        <div className="Navbar-Buttons">
            <Button name="Sort AtoZ"/>
            <Button name="Sort ZtoA"/>
            <Button name="Sort by Date(ASC)"/>
            <Button name="Sort by Date(Desc)"/>
            <Button name="Sort by quality(ASC)"/>
            <Button name="Sort by quality(Desc)"/>
            <Button name="Filleter Explitic"/>
        </div>
    )
}