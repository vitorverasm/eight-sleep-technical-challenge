import { styled } from "@gluestack-style/react";
import {
  Button as GButton,
  ButtonText as GButtonText,
} from "@gluestack-ui/themed";
import { ComponentProps, useMemo, useState } from "react";

const ButtonContainer = styled(GButton, {
  backgroundColor: "$secondary950",
  ":active": {
    backgroundColor: "$black",
  },
  ":pressed": {
    backgroundColor: "$black",
  },
  borderRadius: "$full",
  flex: 1,
  alignItems: "center",
});

const Text = styled(GButtonText, {
  fontSize: "$sm",
});

const Button = (props: ComponentProps<typeof ButtonContainer>) => {
  const [isPressed, setIsPressed] = useState(false);

  const isDisabled = useMemo(() => props.disabled === true, [props.disabled]);

  return (
    <ButtonContainer
      {...props}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      states={{ pressed: isPressed, disabled: isDisabled }}
      variant="solid"
      size="lg"
      hardShadow="1"
    >
      {props.children}
    </ButtonContainer>
  );
};

export default { Button, Text };
