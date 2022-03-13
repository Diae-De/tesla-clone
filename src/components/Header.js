import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux'


function Header() {

    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)

    return (
        <Container>
            <Link to="/">
                <img src="/images/logo.png"/>
            </Link>

            <Menu className='menu'>
                {cars && cars.map((car,index)=> 
                    <Link to="/modelS" key={index} href="#">{car}</Link>
                )}
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </Menu>
            <RightMenu className="right-menu">
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CostumeMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus} className="navbar">
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index)=> 
                    <li key={index}><Link to="/modelS">{car}</Link></li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position:fixed;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        padding:0 10px;
        flex-wrap:no-wrap;
        font-weight:400;
    };

    @media (max-width: 1000px) {
            display:none;
        
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items: center;
    a{
        padding:0 10px;
        flex-wrap:no-wrap;
        font-weight:400;
    };

    @media (max-width: 1000px) {
            a{display:none;}
        
    }
`

const CostumeMenu = styled(MenuIcon)`
    cursor:pointer;
`

const BurgerNav= styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:white;
    width:300px;
    z-index:2;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in-out;
    li{
        padding:15px 0;
        
    }
    
`

const CustomClose = styled(CloseIcon)`
    cursor:pointer
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;

`