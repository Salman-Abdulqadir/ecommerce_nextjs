import styled from "styled-components";
export const StyledProductDetails = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 5rem;
  img{
    max-height: 70vh;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .quantity {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      button{
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: #401F3E;
      }
    }

    .cart-btn{
        align-self: flex-start;
        background-color: #401F3E;
        padding: 1rem 2rem;
        font-size: 1rem;
        color: white;
        border: 2px solid #401F3E;
        border-radius: 5px;
        transition: background 0.5s ease;
        &:hover{
            background-color: white;
            color: #401F3E;

        }
    }
  }
`;
