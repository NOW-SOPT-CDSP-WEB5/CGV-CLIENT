import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoR from '../assets/font/AppleSDGothicNeoR.woff';
import AppleSDGothicNeoM from '../assets/font/AppleSDGothicNeoM.woff';
import AppleSDGothicNeoSB from '../assets/font/AppleSDGothicNeoSB.woff';
import AppleSDGothicNeoB from '../assets/font/AppleSDGothicNeoB.woff';
import AppleSDGothicNeoEB from '../assets/font/AppleSDGothicNeoEB.woff';

const GlobalFont = createGlobalStyle`
@font-face {
    font-family: "Apple SD Gothic Neo Regular";
    src: local("AppleSDGothicNeoRegular"), url(${AppleSDGothicNeoR}) format("woff");
}

@font-face {
    font-family: "Apple SD Gothic Neo Medium";
    src: local("AppleSDGothicNeoMedium"), url(${AppleSDGothicNeoM}) format("woff");
}

@font-face {
    font-family: "Apple SD Gothic Neo SemiBold";
    src: local("AppleSDGothicNeoSemiBold"), url(${AppleSDGothicNeoSB}) format("woff");
}

@font-face {
    font-family: "Apple SD Gothic Neo Bold";
    src: local("AppleSDGothicNeoBold"), url(${AppleSDGothicNeoB}) format("woff");
}

@font-face {
    font-family: "Apple SD Gothic Neo ExtraBold";
    src: local("AppleSDGothicNeoExtraBold"), url(${AppleSDGothicNeoEB}) format("woff");
}

`;
export default GlobalFont;
