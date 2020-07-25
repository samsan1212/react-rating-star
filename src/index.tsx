import React from "react";
import PropTypes from 'prop-types';
import { Props } from "../index"
import { toColourTheme, toOffsets, toSize, RangeArray } from "./utils";

const RatingStar: React.FC<Props> = ({
    id,
    maxScore = 5,
    rating = 0,
    colors = {},
    numberOfStar = 5,
    width,
    clickable,
    strokeWidth = 0.5,
    onRatingChange
}) => {
    const scorePerStar = React.useMemo(() => maxScore / numberOfStar, [maxScore, numberOfStar])
    const arrayForIterate = React.useMemo(() => RangeArray(
        Math.ceil(rating ? rating / scorePerStar : 0)
    ), [rating, scorePerStar])
    const colours = React.useMemo(() => toColourTheme(colors), [colors]);
    const size = React.useMemo(() => toSize(numberOfStar, width), [numberOfStar, width])
    const cursor = React.useMemo(() => clickable ? "cursor" : "default", [clickable])
    const [offsets, setOffsets] = React.useState(() => toOffsets(rating, scorePerStar))

    const onClickStar = React.useCallback((index: number) => () => {
        const score = (index + 1) * scorePerStar;
        if (onRatingChange) {
            onRatingChange(score);
        }
        setOffsets(toOffsets(score, scorePerStar))
    }, [rating, scorePerStar, onRatingChange]);
    const onMouseOverStar = React.useCallback((index: number) => () => {
        setOffsets(toOffsets((index + 1) * scorePerStar, scorePerStar));
    }, [rating, scorePerStar])
    const onMouseLeaveSvg = React.useCallback(() => { setOffsets(toOffsets(rating, scorePerStar)); }, [rating, scorePerStar])

    return (
        <div id={id} className="react-rating-star">
            <svg
                width={size.width}
                height={size.height}
                viewBox={`"0 0 ${size.viewBox.width} ${size.viewBox.height}`}
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor }}
                onMouseLeave={clickable ? onMouseLeaveSvg : undefined}
            >
                <defs>
                    {arrayForIterate.map((index) => (
                        <linearGradient
                            id={`star_mask_${id}-index`}
                            key={`star_mask_${id}-index`}
                        >
                            <stop offset="0" stopColor={colours.mask} />
                            <stop stopColor={colours.mask} offset={offsets[index] ?? 0} />
                            <stop stopColor={colours.rear} offset={offsets[index] ?? 0} />
                            <stop offset="1" stopColor={colours.rear} />
                        </linearGradient>
                    ))}
                </defs>
                <g stroke={colours.stroke} strokeWidth={strokeWidth}>
                    {/* Using https://material.io/resources/icons/?icon=star_rate */}
                    {arrayForIterate.map((index) => (
                        <path
                            key={`star_${id}-${index}`}
                            d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
                            fill={`url(#star_mask_${id}-${index})`}
                            transform={'translate(' + (index * 18 + strokeWidth) + ' ' + strokeWidth + ')'}
                            onClick={clickable ? onClickStar(index) : undefined}
                            onMouseOver={clickable ? onMouseOverStar(index) : undefined}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

RatingStar.propTypes = {
    id: PropTypes.string.isRequired,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    clickable: PropTypes.bool,
    rating: PropTypes.number,
    colors: PropTypes.object,
    numberOfStar: PropTypes.number,
    onRatingChange: PropTypes.func
}

export default RatingStar;
