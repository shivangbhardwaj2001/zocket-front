import React from 'react';
import buyplan from '../images/buyplan.jpeg'
import gift from '../images/gift.jpeg'
import notification from '../images/notification.jpeg'
import shopicon from '../images/shopicon.jpeg'
import language from '../images/language.jpeg'
export const Navbar=()=>{
    return(
        <div className="navbar2">
<div className='text1  '> Free Trial Ends in two days</div>
<div className="div2"><img src={buyplan}  width="130px" height="45px" /> </div>
<div className="div3"><img src={gift}  width="40px" height="40px" /> </div>
<div className="div4"><img src={notification}  width="40px" height="40px" /> </div>
<div className="div5"> <img src={shopicon}  width="50px" height="50px" /></div>
<div className="text2 btn  dropdown-toggle">Mukund Cake Shop</div>
<div className="div7"> <img src={language}  width="40px" height="40px" /></div>
</div>
    )
}
