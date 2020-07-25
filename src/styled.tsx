import styled from "styled-components";
import { RatingStarIconsWrapperProps } from "../types/RatingStar";

export const Container = styled.div`
    display: inline-block;
    padding: 8px;
`;

export const IconsWrapper = styled.div<RatingStarIconsWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.clickable ? "pointer" : "default"};
`;