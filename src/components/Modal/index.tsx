import React from "react";
import ReactDom from "react-dom";
import { Container, Overlay, CloseButton } from "./ModalStyles";

interface Props {
    open: boolean;
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ open, children, onClose }: Props) {
    if (!open) return null;

    const portalDiv = document.getElementById("portal");

    return portalDiv
        ? ReactDom.createPortal(
              <>
                  <Overlay onClick={onClose} />
                  <Container>
                      <CloseButton onClick={onClose} />

                      {children}
                  </Container>
              </>,
              portalDiv
          )
        : null;
}
