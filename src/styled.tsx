import styled from "styled-components";
import { RatingStarIconsWrapperProps } from "..";

export const Container = styled.div`
    display: inline-block;
    padding: 8px;
`;

export const IconsWrapper = styled.div<RatingStarIconsWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.clickable ? "cursor" : "default"};
`;