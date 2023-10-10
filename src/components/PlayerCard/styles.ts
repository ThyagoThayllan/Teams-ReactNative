import { styled, css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
  border-radius: 10px;
  flex-flow: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 15px 0;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.PURPLE1,
}))`
    margin-right: 6px;
    margin-left: 10px;
`;