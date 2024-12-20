import { Button } from "antd";
import Column from "antd/es/table/Column";
import ReactDOM from 'react-dom';


function CounterWarning({close}){
    const handleClose = () => {
        close()
    }
    const counterwarning=
        <div style={{
            display: "flex",
            flexDirection: "Column",
            alignItems:"center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color:"white",
            position: "fixed",
            top: "0px",
            bottom: "0px",
            left: "0px",
            right: "0px",
            justifyContent: "center",
            zIndex:"1000",
            }}>

            <div style={{display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "white",
                        color: "black",
                        width:"50%",
                        border: "2px black solid",
                        padding: "2%"
            }}>
                
            <h1>DON'T increment further there might be ERROR</h1>
            <Button type="primary"danger onClick={handleClose}>OK</Button>
            </div>
        </div>
    return ReactDOM.createPortal(counterwarning, document.getElementById('portalDiv'))
}
export default CounterWarning;