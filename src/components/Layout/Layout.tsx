import Header from "../Header/Header";
import { useAppSelector } from "../../hooks/storeHook";
import { Props } from "../../api/interfaces";


/** Template for layout, wrap children to basic css class from tailwind */
const Layout = ({ children }: Props) => {
    const { darkTheme } = useAppSelector((state) => state)
    return (
        <div className={`layout ${darkTheme && "dark"}`}>
            <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
                <div className="layout__inner mx-auto max-w-screen-xl">
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout