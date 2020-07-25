/**
 * Using https://material.io/resources/icons/?icon=star_rate
 */
import React from "react";
import Context from "./context";

interface Props {
    index: number;
    onClick?: () => void;
    onMouseOver?: () => void
}

const IcStar: React.FC<Props> = ({ index, onClick, onMouseOver }) => {
    const { id, colours, offsets, size, noBorder } = React.useContext(Context);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
            <defs>
                <linearGradient id={`star_mask_${id}-${index}`}>
                    <stop offset="0" stopColor={colours.mask} />
                    <stop stopColor={colours.mask} offset={offsets[index] ?? 0} />
                    <stop stopColor={colours.rear} offset="0" />
                    <stop offset="1" stopColor={colours.rear} />
                </linearGradient>
            </defs>
            <g stroke={colours.stroke} strokeWidth={noBorder ? 0 : 0.5}>
                <polygon
                    fill={`url(#star_mask_${id}-${index})`}
                    points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"
                    onClick={onClick}
                    onMouseOver={onMouseOver}
                />
            </g>
        </svg>
    )
};

export default IcStar;
