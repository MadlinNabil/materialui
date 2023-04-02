import { makeStyles } from "@mui/styles";

const useStyles = makeStyles ({
    container: {
        background: "Paper",
        padding: "40px",
        margin: "10px",
    }, 
    icons:{
        marginRight:"20px",
    },
    button: {
        margin:"25px",
    },
    cardGrid:{padding: "30Ppx 0"},
    card:{height:"100%" , display:"flex" , flexDirection:"column" , padding:"30px 15px"},
    CardMedia:{paddingTop:"56.25%"},
    CardContent:{flexGrow:1},
});

export default useStyles;