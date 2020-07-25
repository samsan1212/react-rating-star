interface Size {
    width: number;
    height: number;
    viewBox: {
        width: number;
        height: number;
    };
}

export interface ColourTheme {
    stroke: string;
    mask: string;
    rear: string;
}

export interface Props {
    id: string;
    maxScore?: number;
    clickable?: boolean;
    width?: number;
    rating?: number;
    colors?: Partial<ColourTheme>;
    numberOfStar?: number;
    strokeWidth?: number;
    onRatingChange?: (rating: number) => void;
}
