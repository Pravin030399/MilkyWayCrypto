import React from "react";
import {
  CarouselCardContainer,
  CarouselCardDesign,
  CarouselCardImageWrapper,
  CarouselCardImage,
  CarouselCardDetailsContainer,
  CarouselCardTitle,
  CarouselCardContent,
} from "./NewsCarouselElement";
import { Text, Linking } from "react-native";

const NewsCarousel = (props) => {
  return (
    <CarouselCardContainer>
      <CarouselCardDesign onClick={() => Linking.openURL(props.newsUrl)}>
        <CarouselCardImageWrapper>
          <CarouselCardImage
            src={props.newsImage}
            alt="No Image Displaying"
          ></CarouselCardImage>
        </CarouselCardImageWrapper>
        <CarouselCardDetailsContainer>
          <CarouselCardTitle>{props.newsTitle}</CarouselCardTitle>
          <CarouselCardContent>{props.newsContent}</CarouselCardContent>
        </CarouselCardDetailsContainer>
      </CarouselCardDesign>
    </CarouselCardContainer>
  );
};

export default NewsCarousel;
