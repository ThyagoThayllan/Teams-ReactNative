import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "add" | "delete";

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  min-width: 56px;
  max-height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "add" ? theme.COLORS.PURPLE1 : theme.COLORS.RED1,
}))``;
