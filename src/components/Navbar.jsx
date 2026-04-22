

const Navbar = () => {
    return (
        <div className="bg-base-200 shadow-sm">
            <div className="max-lg:collapse w-11/12 mx-auto ">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start gap-3">
                    <label htmlFor="navbar-1-toggle" className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <button className="font-bold text-3xl md:font-extrabold text-[#622069]">Foody</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><button>Item 1</button></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </details>
                        </li>
                        <li><button>Item 3</button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search" className="input input-bordered w-40 lg:w-auto" />
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    <li><button>Item 1</button></li>
                    <li>
                        
                    </li>
                    <li><button>Item 3</button></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;