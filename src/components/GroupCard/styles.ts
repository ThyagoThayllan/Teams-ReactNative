import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.COLORS.GRAY6};
  border-radius: 10px;
  flex-flow: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.PURPLE1,
  weight: "fill",
}))`
  margin-right: 20px;
`;
