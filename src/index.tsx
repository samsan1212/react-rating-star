import React from "react";
import PropTypes from 'prop-types';
import { RatingStarProps } from "../types/RatingStar"
import { toColourTheme, toOffsets, RangeArray } from "./utils";
import Context from "./context";

import IcStar from "./ic-star";
import { IconsWrapper, Container } from "./styled";

export const RatingStar: React.FC<RatingStarProps> = ({
    id,
    maxScore = 5,
    rating = 0,
    colors = {},
    numberOfStar = 5,
    size = 24,
    clickable = false,
    noBorder = false,
    onRatingChange
}) => {
    const scorePerStar = React.useMemo(() => maxScore / numberOfStar, [maxScore, numberOfStar])
    const range = React.useMemo(() => RangeArray(numberOfStar), [numberOfStar]);
    const colours = React.useMemo(() => toColourTheme(colors), [colors]);
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

    React.useEffect(() => {
        setOffsets(toOffsets(rating, scorePerStar));
    }, [rating, scorePerStar])

    return (
        <Context.Provider value={{ id, colours, offsets, size, noBorder }}>
            <Container id={id} className="rating-star">
                <IconsWrapper
                    className="rating-star-icons-wrapper"
                    clickable={clickable}
                    onMouseLeave={clickable ? onMouseLeaveSvg : undefined}
                >
                    {range.map(index => (
                        <IcStar
                            key={`star_mask_${id}-${index}`}
                            index={index}
                            onClick={clickable ? onClickStar(index) : undefined}
                            onMouseOver={clickable ? onMouseOverStar(index) : undefined}
                        />
                    ))}
                </IconsWrapper>
            </Container>
        </Context.Provider>
    );
}

RatingStar.propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.number,
    clickable: PropTypes.bool,
    rating: PropTypes.number,
    colors: PropTypes.object,
    numberOfStar: PropTypes.number,
    onRatingChange: PropTypes.func
}

export const RatingStarIconsWrapper = IconsWrapper;
export const RatingStarContainer = Container;
