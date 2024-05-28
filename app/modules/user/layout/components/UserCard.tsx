import {
  Button,
  ButtonIcon,
  Card as GCard,
  HStack,
  Heading,
  StarIcon,
  Text,
  VStack,
  styled,
} from "@gluestack-ui/themed";
import { ComponentProps, useMemo, useState } from "react";
import { GestureResponderEvent, Pressable } from "react-native";

const CardContainer = styled(GCard, {
  backgroundColor: "$backgroundDark950",
  paddingVertical: "$4",
  justifyContent: "center",
  borderRadius: "$lg",
  borderWidth: "$2",
  ":checked": {
    borderWidth: "$2",
    borderColor: "#246AFF",
    backgroundColor: "$secondary950",
  },
  ":pressed": {
    borderWidth: "$2",
    borderColor: "#246AFF",
    backgroundColor: "$secondary950",
  },
});

const Title = styled(Heading, {
  fontSize: "$lg",
});

const Description = styled(Text, {
  fontSize: "$sm",
});

const Card = (
  props: ComponentProps<typeof CardContainer> & {
    onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  },
) => {
  const [isPressed, setIsPressed] = useState(false);

  const isChecked = useMemo(
    () => props.states?.checked === true,
    [props.states?.checked],
  );

  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <CardContainer
        {...props}
        states={{ pressed: isPressed, checked: isChecked }}
      >
        <HStack alignItems="center">
          <VStack flex={2}>{props.children}</VStack>
          <Button
            variant="link"
            onPress={() => {
              console.log("test");
            }}
            paddingRight={"$2"}
          >
            <ButtonIcon as={StarIcon} color="$white" height={22} width={22} />
          </Button>
        </HStack>
      </CardContainer>
    </Pressable>
  );
};

export default { Card, Title, Description };
