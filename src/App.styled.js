import styled from "styled-components";

export const Div = styled.div`
/* .container { */
margin: 100px auto;

width: 300px;
height: 300px;

  position: relative;
  border: none;
  background-color: red; /* Колір фону контейнера */
  padding: 20px; /* Відступи всередині контейнера */
  text-align: center; /* Вирівнювання тексту в контейнері */
/* } */

&::before, &::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px; /* Товщина ліній */
  background-color: #000; /* Колір ліній */
  transform: rotate(-2deg); /* Кут нахилу першої лінії */
  transform-origin: center center; /* Точка обертання */
  z-index: -1; /* Повинен бути нижче контенту */
}

&::before {
  top: -7px; /* Відступ першої лінії від верхнього краю контейнера */
}

&::after {
  bottom: -7px; /* Відступ другої лінії від нижнього краю контейнера */
  transform: rotate(2deg); /* Кут нахилу другої лінії */
}
`;