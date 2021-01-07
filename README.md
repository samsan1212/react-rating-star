# React Rating Star

Rating Star UI Component powered by ReactJS

[![npm](https://img.shields.io/npm/v/rating-star?color=%23ffb100&style=flat-square)](https://www.npmjs.com/package/rating-star)

## Installation

```bash
npm i rating-star
```

```bash
yarn add rating-star
```

## Prerequisite

The version of React has to be **16.8.0** or above.

## How To Use

Javascript / Typescript

```javascript
import { RatingStar } from "rating-star";

export default function App() {
  const [rating, setRating] = React.useState(30);

  const onRatingChange = (score) => {
    setRating(score);
  };

  return (
    <div className="App">
      <h1>Rating Star</h1>
      <RatingStar
        clickable
        maxScore={100}
        id="123"
        rating={rating}
        onRatingChange={onRatingChange}
      />
    </div>
  );
}
```

For more details, can go to [Demos](#demos).

## Props

| Name                        | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| `id`                        | the element id                                       |
| `clickable` (optional)      | enable click for the ratings, default is `false`     |
| `noBorder` (optional)       | disable borders of the star icon, default is `false` |
| `size` (optional)           | icon size, default is `24`                           |
| `maxScore` (optional)       | the maximum score of the ratings, default is `5`     |
| `rating` (optional)         | the current score, default is `0`                    |
| `numberOfStar` (optional)   | total number of star icons, default is `5`           |
| `colors` (optional)         | colours of the star icon                             |
| `onRatingChange` (optional) | a callback of `rating` changes                       |

### Prop Types

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

## Customise the Star Icon

You can customise the star icon with your needs.

Example:

```tsx
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { RatingStar } from "rating-star";

function App() {
  return (
    <RatingStar
      id="custom-icon-wow"
      rating={3}
      starIcon={AcUnitIcon}
      colors={{ mask: "#43a7e3" }}
      noBorder
    />
  );
}
```

### Caveat

- The custom icon must be a SVG React component which contains only one child element.

  The child element can be one of:

  - `path`
  - `polygon`
  - `circle`
  - `rect`
  - `image`

  e.g.

  ```jsx
  function CustomIcon() {
    return (
      <svg>
        <path d="..." />
      </svg>
    );
  }
  ```

## Customise the Styles

You can customise the styles of the `rating-star` container by CSS class name, "rating-star",

or use the `id` you have assigned to the `rating-star` component.

### Use with Styled Components

For `styled-components` lover, you can modify the styles with the power of the `styled-components`.

```typescript
import styled from "styled-components";

import { RatingStarContainer, RatingStarIconsWrapper } from "rating-star";

const YourStyledComponent = styled.div`
  ${RatingStarContainer} {
    margin: 10px 0;
  }
  ${RatingStarIconsWrapper} {
    > svg {
      margin: 3px 0;
    }
  }
`;
```

## Demos

- [Fixed rating](https://codesandbox.io/s/fixed-rating-fjjm8)
- [Controlled rating](https://codesandbox.io/s/controlled-rating-hlmmb)
- [Customising the style](https://codesandbox.io/s/customising-the-style-qi24u)
- [Using different maximum score](https://codesandbox.io/s/using-different-maximum-score-95krf)
- [Using different number of star](https://codesandbox.io/s/using-different-number-of-star-h67fy)
- [Using with `styled-components`](https://codesandbox.io/s/using-with-styled-components-dqvii)
- [Using with custom icon](https://codesandbox.io/s/custom-star-icon-k58rb)
