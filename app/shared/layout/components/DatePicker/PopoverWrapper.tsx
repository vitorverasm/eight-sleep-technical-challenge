import {
  Popover as GPopover,
  PopoverBackdrop,
  PopoverBody,
  PopoverContent,
  styled,
} from "@gluestack-ui/themed";

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

export default function PopoverWrapper({
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
      <CustomPopoverContent w={popoverWidth}>
        <PopoverBody>{children}</PopoverBody>
      </CustomPopoverContent>
    </GPopover>
  );
}
