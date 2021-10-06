import { ButtonContainer, Button } from "./Button";

export default function JoinButton(props)
{
    return (
        <ButtonContainer>
        <Button>
            {props.children}
        </Button>
        </ButtonContainer>
    );
}