import { useContext, useEffect, useState} from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CardContext } from '../../../contexts/CardContext/CardContext';
import { api } from '../../../services/api';

const ProductCard = () => {

  const {products, setProducts} = useContext(CardContext )

  useEffect(()=> {
    const RenderItens = async () => {
        const token = localStorage.getItem('user')
        try {
          const response =  await api.get('/products',{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            setProducts(response.data)

        } catch (error) {
            console.log(error)
        }
    }
    RenderItens() 
  }, [])


  return (
    <>
    
  {products.map(product => (
    <StyledProductCard key={product.id}>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {product.price}</StyledParagraph>
        <StyledButton $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
    
    )) 
  }
  </>)
  
};

export default ProductCard;
