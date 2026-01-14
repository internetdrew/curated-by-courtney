import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import { VibrateIcon, type VibrateIconHandle } from "@/components/VibrateIcon";
import {
  HeartHandshakeIcon,
  type HeartHandshakeIconHandle,
} from "@/components/HeartHandshakeIcon";
import {
  HandMetalIcon,
  type HandMetalIconHandle,
} from "@/components/HandMetalIcon";

import { useRef } from "react";

export const HowItWorksGroup = () => {
  const vibrateRef = useRef<VibrateIconHandle>(null);
  const handshakeRef = useRef<HeartHandshakeIconHandle>(null);
  const handMetalRef = useRef<HandMetalIconHandle>(null);

  return (
    <ItemGroup className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8 ">
      <Item
        variant="outline"
        onMouseEnter={() => vibrateRef.current?.startAnimation()}
        onMouseLeave={() => vibrateRef.current?.stopAnimation()}
      >
        <ItemMedia>
          <VibrateIcon ref={vibrateRef} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Start with a conversation</ItemTitle>
          <ItemDescription className="text-wrap">
            We talk through your ideas, your priorities, and what you want the
            day to feel like.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item
        variant="outline"
        onMouseEnter={() => handshakeRef.current?.startAnimation()}
        onMouseLeave={() => handshakeRef.current?.stopAnimation()}
      >
        <ItemMedia>
          <HeartHandshakeIcon ref={handshakeRef} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>I handle the details</ItemTitle>
          <ItemDescription className="text-wrap">
            Planning, coordination, and all the behind-the-scenes work are
            covered.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item
        variant="outline"
        onMouseEnter={() => handMetalRef.current?.startAnimation()}
        onMouseLeave={() => handMetalRef.current?.stopAnimation()}
      >
        <ItemMedia>
          <HandMetalIcon size={24} ref={handMetalRef} />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>You enjoy the party</ItemTitle>
          <ItemDescription className="text-wrap">
            Show up, be present, and actually enjoy hosting.
          </ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};
