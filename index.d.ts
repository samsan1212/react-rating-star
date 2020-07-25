import React from "react";
import { StyledComponent } from "styled-components";


export = RatingStar;
export as namespace RatingStar;

declare namespace RatingStar {

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
        onRatingChange?: (rating: number) => void;
    }

    type RatingStar = React.FC<RatingStarProps>;

    type RatingStarContainer = StyledComponent<"div", any, {}, never>;


    interface RatingStarIconsWrapperProps {
        clickable: boolean
    }
    type RatingStarIconsWrapper = StyledComponent<"div", any, RatingStarIconsWrapperProps, never>;

}