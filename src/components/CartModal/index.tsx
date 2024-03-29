import { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CardContext} from '../../contexts/CardContext/CardContext';

const CartModal = () => {

  const {cardModal, setCardModal} = useContext(CardContext)
  

  
  if (cardModal){
    return (
      <StyledCartModalBox>
    <dialog>
      <header>
        <StyledTitle tag='h2' $fontSize='three'>
          Carrinho de compras
        </StyledTitle>
        <button
          type='button'
          aria-label='Fechar'
          onClick={() => setCardModal(false) }
        >
          <MdClose size={21} />
        </button>
      </header>
      <div className='cartBox'>
        <CartProductList />

        <div className='emptyBox'>
          <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
            Sua sacola está vazia
          </StyledTitle>
          <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
        </div>
      </div>
    </dialog>
  </StyledCartModalBox>
    )
  }
  return null
     
  
};

export default CartModal;
