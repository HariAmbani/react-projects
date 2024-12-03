//styles , inline styles , import css from external style sheets
import Heading from './header';
import './Test.css';
function Test(){
    return(<div className="testcontainer"
        style={{ backgroundColor:"red",
        color:"white"}}>
            Sample Test
            <Heading/>
        </div>)
}
export default Test;