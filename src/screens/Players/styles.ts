import { css, styled } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY7};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  max-height: 56px;
  min-height: 56px;
  flex-flow: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY6};
  border-radius: 10px;
  justify-content: center;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-flow: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
