import {
  ButtonGroup,
  Popover as GPopover,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  styled,
} from "@gluestack-ui/themed";
import Button from "../../Button";
import { Text } from "@gluestack-ui/themed";

const CustomPopoverContent = styled(PopoverContent, {
  bg: "$backgroundDark950",
  borderTopStartRadius: 0,
  borderTopEndRadius: 0,
  marginTop: -1,
});

type PopoverProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  trigger: (
    _props: any,
    state: {
      open: boolean;
    },
  ) => JSX.Element;
  popoverWidth: number;
  children?: React.ReactNode;
};

type PopoverFooterProps = {
  onPressLatestSession: () => void;
  onPressToday: () => void;
  hideLatestSession?: boolean;
  hideToday?: boolean;
};

function Body({ children }: { children: React.ReactNode }) {
  return <PopoverBody>{children}</PopoverBody>;
}

function Footer({
  onPressLatestSession,
  onPressToday,
  hideLatestSession,
  hideToday,
}: PopoverFooterProps) {
  return (
    <PopoverFooter borderTopColor="transparent" justifyContent="flex-start">
      {hideLatestSession && hideToday ? null : <Text mb="$4">Go to:</Text>}
      <ButtonGroup space="md" flexDirection="row" w="$full">
        {hideLatestSession ? (
          <></>
        ) : (
          <Button.Container onPress={onPressLatestSession} size="xs" flex={1}>
            <Button.Text>Latest session</Button.Text>
          </Button.Container>
        )}
        {hideToday ? (
          <></>
        ) : (
          <Button.Container
            onPress={onPressToday}
            size="xs"
            flex={hideLatestSession ? 1 : 0.5}
          >
            <Button.Text>Today</Button.Text>
          </Button.Container>
        )}
      </ButtonGroup>
    </PopoverFooter>
  );
}

function Wrapper({
  isOpen,
  onClose,
  onOpen,
  trigger,
  popoverWidth,
  children,
}: PopoverProps) {
  return (
    <GPopover
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      placement="bottom"
      trigger={trigger}
    >
      <PopoverBackdrop />
      <CustomPopoverContent w={popoverWidth}>{children}</CustomPopoverContent>
    </GPopover>
  );
}

export default {
  Wrapper,
  Footer,
  Body,
};
