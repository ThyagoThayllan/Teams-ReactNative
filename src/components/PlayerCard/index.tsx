import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";
import { useTheme } from "styled-components/native";

type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="delete" onPress={onRemove} />
    </Container>
  );
};
