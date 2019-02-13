import * as React from "react";
import { MObject, MBody, Wrapper } from "./Media.styles";

export const Media: React.SFC & Subcomponets = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

interface Subcomponets {
  Object: typeof MediaObject;
  Body: typeof MediaBody;
}

interface ObjectProps {
  image?: string;
}

const MediaObject: React.SFC<ObjectProps> = ({ image }) => (
  <MObject>
    <img src={image} />
  </MObject>
);

interface BodyProps {
  className?: string;
}

const MediaBody: React.SFC<BodyProps> = ({ children }) => (
  <MBody>{children}</MBody>
);

Media.Object = MediaObject;
Media.Body = MediaBody;
