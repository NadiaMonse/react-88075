
import CartWidget from "./CartWidget";
import { Link } from "react-router";

export default function NavBar(){
    return(
        <nav style={styles.nav}>
            <Link to="/">
            <h2 style={styles.logo}> Mi Tienda</h2>
            </Link>
            
            <ul style={styles.menu}>
                
                <li>
                <Link to="/category/Ropa">
                Ropa
                </Link>
                </li>
                <li>
                    < Link to="/category/Accesorios" >
                    Accesorios
                    </Link>
                    </li>
                    <li>
                <Link to="/category/Electronica">
                    Electronica
                </Link>
                </li>
                <li>
                    <Link to="/category/Hogar">
                    Hogar
                    </Link>
                </li>
            </ul>
            <Link to="/cart">
            
            <span><CartWidget/></span>
            </Link>
    </nav>
    );
};

const styles={
    nav:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding:"10px 20px",
        margin:"0px",
        backgroundColor:"#87398aff",
        color:"white"
    },
    logo:{margin:0},
    menu:{display:"flex ",listStyle:"none",gap:"20px"}
};