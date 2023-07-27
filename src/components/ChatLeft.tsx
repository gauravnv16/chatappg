import NavBar from "./NavBar";
import Grouped from "./SearchUsers";
import AlignItemsList from "./Users";

export default function ChatLeft() {
    return <aside className="w-fit
    bg-white h-full">
    <NavBar/>
    <section className="p-2 flex">
    <Grouped/>
    </section>
    <AlignItemsList/>
    </aside>
}