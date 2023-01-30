import styled from "styled-components";

export const Products = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;
export const StyledProduct = styled.div`
    .image{
        img{
            width: 100%;
            height: 20rem;
            object-fit: contain;
            mix-blend-mode: multiply;
        }
    }

`;
