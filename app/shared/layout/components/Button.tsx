import { styled } from "@gluestack-style/react";
import {
  Button as GButton,
  ButtonText as GButtonText,
} from "@gluestack-ui/themed";
import { ComponentProps, useMemo, useState } from "react";

const ButtonContainer = styled(GButton, {
  backgroundColor: "#246AFF",
  height: 54,
  width: "$full",
  py: "$3",
  px: "$12",
  ":active": {
    backgroundColor: "#0049e6",
  },
  ":pressed": {
    backgroundColor: "#0049e6",
  },
  ":disabled": {
    backgroundColor: "#B0B0B0",
  },
});

const Text = styled(GButtonText, {
  fontSize: "$md",
});

const Container = (props: ComponentProps<typeof ButtonContainer>) => {
  const [isPressed, setIsPressed] = useState(false);

  const isDisabled = useMemo(() => props.disabled === true, [props.disabled]);

  return (
    <ButtonContainer
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      states={{ pressed: isPressed, disabled: isDisabled }}
    >
      {props.children}
    </ButtonContainer>
  );
};

export default { Container, Text };
