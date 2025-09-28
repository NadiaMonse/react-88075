
import CartWidget from "./CartWidget";


export default function NavBar(){
    return(
        <nav style={styles.nav}>
            <h2 style={styles.logo}> Mi Tienda</h2>
            <ul style={styles.menu}>
                <li>remera</li>
                <li>buzo</li>
                <li>campera</li>
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