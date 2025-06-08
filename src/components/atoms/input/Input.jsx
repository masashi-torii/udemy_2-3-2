import styled from "styled-components"

export const Input = (props) => {
    const { pleceholder = "" } = props;
    return <SInput type="text" placeholder={pleceholder}/>;
}

const SInput = styled.input`
`