import Link from "next/link";


export default function Header() {
    return (
        <div className="header">
            <div className="header-button">
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                 <li><Link href="/Portfolio">Portfolio </Link></li>
                 <li><Link href="/About">About </Link></li>
                 <li><Link href="/Contact">Contact </Link></li>
                </ul>
            </div>
            
        </div>
    );

}
<Header />