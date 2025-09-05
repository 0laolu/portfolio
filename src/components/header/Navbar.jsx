

export default function Navbar() {
    return (
        <header>
            <nav className="w-9/10 mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">O.A.</div>
                <ul className="w-1/2 flex justify-evenly">
                    <li className="p-8">About</li>
                    <li className="p-8">Projects</li>
                    <li className="p-8">Contact</li>
                    <li className="p-8">Resumé</li>
                </ul>
            </nav>
        </header>
    )
}