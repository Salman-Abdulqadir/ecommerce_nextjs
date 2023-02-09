import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`;
export const StyledCart = styled.div`
  width: 30%;
  height: 100%;
  background-color: white;
  padding: 2rem 4rem;
  position: relative;
`;
export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .close-cart {
    cursor: pointer;
  }
`;
export const CartBody = styled.div`
  margin-bottom: 3rem;
`;
export const EmptyCart = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
