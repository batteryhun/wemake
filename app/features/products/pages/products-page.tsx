import { redirect } from "react-router";

export function loader() {
  // loader function이 serverside에서 작용하는 함수이기 때문에 서버에서 하는 일을 할수있음.
  return redirect("/products/leaderboards");
}
