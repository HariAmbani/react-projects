//Styled components
import styled from 'styled-components';

function Foot() {
    const StyledH1 = styled.h1`
        color: red;
        font-size: 50px;
    `;

    const StyledDiv = styled.div`
        color:blue;
        background-color:lightgreen;
        font-size:20px;
    `;

    return (<StyledDiv>
        <h2>Hello world</h2>
        <StyledH1>Footer</StyledH1>
    </StyledDiv>);
}

export default Foot;
 