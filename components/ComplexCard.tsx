import React from "react";
import { Card, Image, Text, Link } from "@geist-ui/react";

interface IComplexCard {
  imageURL: string;
  header: string;
  description: string;
  linkURL: string;
  linkText: string;
}

const ComplexCard: React.FC<IComplexCard> = (props: IComplexCard) => {
  return (
    <div>
      <Card width="400px">
        <Image
          src={props.imageURL}
          style={{ objectFit: "cover", height: "200px", width: "400px" }}
        />
        <Text h4 style={{ marginBottom: "0" }}>
          {props.header}
        </Text>
        <div style={{ marginTop: "0.5rem" }}>
          <Text type="secondary" small>
            {props.description}
          </Text>
        </div>
        <Card.Footer>
          <Link block target="_blank" href={props.linkURL}>
            {props.linkText}
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ComplexCard;
