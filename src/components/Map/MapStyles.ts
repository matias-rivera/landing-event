import styled from "styled-components";

export const Pin = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    background: red;
    position: absolute;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
    -webkit-animation-name: bounce;
    -moz-animation-name: bounce;
    -o-animation-name: bounce;
    -ms-animation-name: bounce;
    animation-name: bounce;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    -ms-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    -ms-animation-duration: 1s;
    animation-duration: 1s;

    &:after {
        content: "";
        width: 14px;
        height: 14px;
        margin: 8px 0 0 8px;
        background: white;
        position: absolute;
        border-radius: 50%;
    }
`;

export const Pulse = styled.div`
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    height: 14px;
    width: 14px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: 11px 0px 0px -12px;
    -webkit-transform: rotateX(55deg);
    -moz-transform: rotateX(55deg);
    -o-transform: rotateX(55deg);
    -ms-transform: rotateX(55deg);
    transform: rotateX(55deg);
    z-index: -2;

    &:after {
        content: "";
        border-radius: 50%;
        height: 40px;
        width: 40px;
        position: absolute;
        margin: -13px 0 0 -13px;
        -webkit-animation: pulsate 1s ease-out;
        -moz-animation: pulsate 1s ease-out;
        -o-animation: pulsate 1s ease-out;
        -ms-animation: pulsate 1s ease-out;
        animation: pulsate 1s ease-out;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;
        -ms-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        opacity: 0;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        -webkit-box-shadow: 0 0 1px 2px #b15555;
        box-shadow: 0 0 1px 2px #b15555;
        -webkit-animation-delay: 1.1s;
        -moz-animation-delay: 1.1s;
        -o-animation-delay: 1.1s;
        -ms-animation-delay: 1.1s;
        animation-delay: 1.1s;
    }
`;
