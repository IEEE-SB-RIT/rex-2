import { Button } from './ButtonElements';

function registerClick() {
  window.open('https://www.yepdesk.com/rex-2-0');
}
export default function JoinButton(props) {
  return <Button onClick={registerClick}>{props.children}</Button>;
}
