import './Header.css'
import {useNavigate} from "react-router";
import {NavLink} from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <div className={'col-md-12 header'} style={{justifyContent: 'center'}}>
            <div className="row">
                <div className={'col-md-2 text-center'}>
                    <img src={'../public/Untitled.jpg'} style={{width: '150px', cursor: 'pointer'}}
                         onClick={() => navigate('/')}/>
                </div>

                <div className="col-md-2">
                    <NavLink to={'/talabalar'}>
                        <button className={'btn btns'}>Talabalar</button>
                    </NavLink>
                </div>

                <div className="col-md-2">
                    <NavLink to={'/bizhaqimizda'}>
                        <button className={'btn btns'}>Biz haqimizda</button>
                    </NavLink>
                </div>

                <div className="col-md-2">
                    <NavLink to={'/postlar'}>
                        <button className={'btn btns'}>Postlar</button>
                    </NavLink>
                </div>

                <div className="col-md-2">
                    <NavLink to={'/sharhlar'}>
                        <button className={'btn btns'}>Sharhlar</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header