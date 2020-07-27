# React Rating Star #

Rating Star UI Component powered by ReactJS

[![npm](https://img.shields.io/npm/v/rating-star?color=%23ffb100&style=flat-square)](https://www.npmjs.com/package/rating-star)

## Installation ##

```bash
npm i rating-star
```

```bash
yarn add rating-star
```

## Prerequisite ##

The version of React has to be **16.8.0** or above.

## Props ##

| Name                        | Description                                |
| --------------------------- | ------------------------------------------ |
| `id`                        | the element id                             |
| `clickable` (optional)      | enable click for the ratings, e.g. onClick |
| `noBorder` (optional)       | disable borders of the star icon           |
| `size` (optional)           | icon size                                  |
| `maxScore` (optional)       | the maximum score of the ratings, e.g. 5   |
| `rating` (optional)         | the current score                          |
| `numberOfStar` (optional)   | total number of star icons                 |
| `colors` (optional)         | colours of the star icon                   |
| `onRatingChange` (optional) | a callback of `rating` changes             |

### Prop Types ###

```typescript
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
```

## Customise the Styles ##

You can customise the styles of the `rating-star` container by CSS class name, "rating-star",

or use the `id` you have assigned to the `rating-star` component.

### Use with Styled Components ###

For `styled-components` lover, you can modify the styles with the power of the `styled-components`.

```typescript
import styled from "styled-components";

import { RatingStarContainer, RatingStarIconsWrapper } from "rating-star";

const YourStyledComponent = styled.div`
    ${RatingStarContainer}{
        margin: 10px 0;
    }
    ${RatingStarIconsWrapper}{
        > svg {
            margin: 3px 0;
        }
    }
`;
```

<!-- ## Demos ## -->