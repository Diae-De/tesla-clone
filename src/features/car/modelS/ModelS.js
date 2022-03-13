import Section from "../../../components/Section"
import "./models.css"
import Fade from 'react-reveal/Fade';


export default function ModelS() {
    return (
        <div className="models">
            <Section title="Model S" description="Plaid" backgroundImg="model-s.jpg" id="models"/>
            <Fade bottom>
                <div className="carInfo">
                    <ul>396mi
                        <li>Range (EPA est.)</li>
                    </ul>
                    <ul>1.99s
                        <li>0-60 mph*</li>
                    </ul>
                    <ul>200mph
                        <li>Top Speed†</li>
                    </ul>
                    <ul>1,020hp
                        <li>Peak Power</li>
                    </ul>
                    <ul>
                        <li><button>Order Now</button></li>
                    </ul>
                </div>
                <div className="allnew">All-New Interior</div>

            </Fade>
            <div className="newIterior">
                <img src="../../../images/new-interior.jpg" alt=""/>
            </div>
            
              
        </div>
    )
}
