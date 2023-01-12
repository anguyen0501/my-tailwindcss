import {FaUser} from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import {useSpring, animated} from "react-spring";
const Content = () => {
    const customer = useSpring({customer: 10245, from: {customer: 0}});
    const card = useSpring({card: 12045, from: {card: 0}});
    return ( 
        <section className="md:flex md:flex-row">
            <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]">
                <div className="mt-16 gap-8 flex items-start">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <div className="text-26">
                        <animated.div>
                            {customer.customer.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold mb-[36px] md:text-16">Customers</p>
                    </div>
                </div>
                <div className="gap-8 flex items-start mb-16 ">
                    <BsFillCreditCardFill size={"22px"} className="mt-[12px]"/>
                    <div className="text-26">
                        <animated.div>
                            {card.card.to((val) => Math.floor(val))}  
                        </animated.div>
                        <p className="text-13 font-semibold md:text-16">Cards Issued</p>
                    </div>
                </div>
            </div>
            <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]">
                <div className="check-content md:mx-0">
                    <img src={checkIconMobile} alt="" className="" />
                     <p className=""> Card reports sent to  your phone every weeks </p>
                </div>
                <div className="check-content md:mx-0">
                    <img src={checkIconMobile} alt="" className="" />
                     <p className=""> No external fees </p>
                </div>
                <div className="check-content md:mx-0">
                    <img src={checkIconMobile} alt="" className="" />
                     <p className=""> Set spending limits and restrictions </p>
                </div>
            </div>
        </section>
     );
}
 
export default Content;