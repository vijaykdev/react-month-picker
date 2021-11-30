import styled from "styled-components";

export const Selected = styled.div`
  border: ${({ theme }) => theme.primary.colours.grey_light} 1px solid;
  border-radius: 5px;
  position: relative;
  user-select: none;
  min-width: 200px;
	background-color: white;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
`;

export const SelectedText = styled.div``;
