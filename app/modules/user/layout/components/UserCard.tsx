import { Card as GCard, Heading, Text, styled } from "@gluestack-ui/themed";
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
        {props.children}
      </CardContainer>
    </Pressable>
  );
};

export default { Card, Title, Description };
