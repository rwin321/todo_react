import React, { ReactNode } from "react";
import { CardContainer, CardContent, CardFooter, CardTitle } from "./styles";

export interface ICard {
  title: string;
  content?: ReactNode;
  footerText?: string;
}

const Card = (props: ICard) => {
  const { title, content, footerText } = props;

  return (
    <CardContainer className="card">
      <CardTitle className="card__title">{title}</CardTitle>
      {content && (
        <CardContent className="card__content">{content}</CardContent>
      )}
      {footerText && (
        <CardFooter className="card__footer">{footerText}</CardFooter>
      )}
    </CardContainer>
  );
};

export default Card;
