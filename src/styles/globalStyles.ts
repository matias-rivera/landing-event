import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    #root{
        margin:0 auto;
        
    }

    :root{
        --color-white:#ffffff;
        --color-white-2:#F0EFF4;
        --color-primary-black:#293F14;
        --color-primary-dark:#386C0B;
        --color-primary:#38A700;
        --color-primary-strong: #31D843;
        --color-primary-light:#3EFF8B;
        --color-secondary:#CA054D;
        --color-black: #000000;
        --color-gray: #5a5a5a;
        --color-gray-light: #c6c6c6;
    }
    body{
        background:#F9FAFC;
    }
`;
