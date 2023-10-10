import { styled, css } from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY6};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY1};
  `}

  border-radius: 10px;
  margin-bottom: 20px;
  padding: 0 20px;
`;
