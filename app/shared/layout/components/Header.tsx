import { styled } from "@gluestack-style/react";
import {
  Box,
  Button,
  ButtonIcon,
  Heading,
  RepeatIcon,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";
import { GestureResponderEvent } from "react-native";

const HeaderContainer = styled(Box, {
  height: 56,
  py: "$3",
  px: "$5",
  flexDirection: "row",
  alignItems: "center",
  gap: "$4",
});

const Title = styled(Heading, {
  fontSize: "$lg",
  flex: 5,
  textAlign: "center",
  verticalAlign: "middle",
});

const LeftIcon = (props: {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) => {
  return (
    <Button
      flex={1}
      size="md"
      variant="link"
      action="primary"
      onPress={props.onPress}
    >
      <ButtonIcon as={RepeatIcon} color="$white" height={28} width={28} />
    </Button>
  );
};

const Container = (props: ComponentProps<typeof HeaderContainer>) => {
  return (
    <HeaderContainer {...props}>
      {props.children}
      <Box flex={1} />
    </HeaderContainer>
  );
};

export default { Container, Title, LeftIcon };
