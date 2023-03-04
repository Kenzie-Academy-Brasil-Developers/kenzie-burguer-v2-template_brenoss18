import { MdShoppingCart, MdLogout } from 'react-icons/md';
import { useContext } from 'react';
import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';
import { StyledContainer } from '../../styles/grid';
import { CardContext } from '../../contexts/CardContext/CardContext';

const Header = () => {

  const {cardModal, setCardModal, LogOut} = useContext(CardContext)

  return(
  <StyledHeader>
    <StyledContainer containerWidth={1300}>
      <div className='flexGrid'>
        <img
          src={LogoKenzieBurguer}
          alt='Kenzie Burguer Logo'
          className='logo'
        />
        <nav className='nav' role='navigation'>
          <SearchForm />
          <div className='buttons'>
            <button
              type='button'
              onClick={() => setCardModal(true)}
            >
              <MdShoppingCart size={28} />
            </button>
            <button type='button' onClick={() => LogOut()} >
              <MdLogout size={28} />
            </button>
          </div>
        </nav>
      </div>
    </StyledContainer>
  </StyledHeader>
  )
};

export default Header;
