
import CartWidget from "./CartWidget";
import { Link } from "react-router";

export default function NavBar(){
    return(
        <nav style={styles.nav}>
            <Link to="/">
            <h2 style={styles.logo}> Mi Tienda</h2>
            </Link>
            <Link to="/detalle"> DETALLE </Link>
            <ul style={styles.menu}>
                <li>Ropa</li>
                <li>Libreria</li>
                <li>Electronica</li>
            </ul>
            <CartWidget/>
    </nav>
    );
};

const styles={
    nav:{
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding:"10px 20px",
        backgroundColor:"#e935daff",
        color:"white"
    },
    logo:{margin:0},
    menu:{display:"flex ",listStyle:"none",gap:"20px"}
};