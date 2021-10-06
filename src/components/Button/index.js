import { Button } from "./Button";

export default function JoinButton(props)
{
    return (
        <Button>
            {props.children}
        </Button>
    );
}