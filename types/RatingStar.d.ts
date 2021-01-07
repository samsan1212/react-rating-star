import React from "react";
import { StyledComponent } from "styled-components";

export = RatingStarModule;
export as namespace RatingStarModule;

declare namespace RatingStarModule {
  interface ColourTheme {
    stroke: string;
    mask: string;
    rear: string;
  }

  interface RatingStarProps {
    id: string;
    clickable?: boolean;
    noBorder?: boolean;
    size?: number;
    maxScore?: number;
    rating?: number;
    numberOfStar?: number;
    colors?: Partial<ColourTheme>;
    starIcon?: CustomStarIconProps;
    onRatingChange?: (rating: number) => void;
  }

  type CustomStarIconProps<T> = T & {
    onClick?: () => void;
    onMouseOver?: () => void;
  };

  var RatingStar: React.FC<RatingStarProps>;

  var RatingStarContainer: StyledComponent<"div", any, {}, never>;

  interface RatingStarIconsWrapperProps {
    clickable: boolean;
  }
  var RatingStarIconsWrapper: StyledComponent<"div", any, RatingStarIconsWrapperProps, never>;
}
