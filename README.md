react good at dom manipulation
fastly rerenders
-keep ui in sync with the state variable

two types of export and import
-default
export default compname;
import compname from "path";

-named export/import(when we have to export multiple things)
export const compname
import{compname} from "path";
can we do both at a time? i tried didnt show any error so yes

react is fast because react can do faster dom manipulation

react hooks
-normal js utility functions they are inside react
2 imp hooks we max only use these
-useState()-super powerful state variable -import {useState} from "react";-keep ui in sync with the variable
-when ever state variabe updates react rerenders the component
-useEffect()-
//conditional rendering
// if (listofrest.length === 0) {
// return (
// <h1>
// <Shimmer />
// </h1>
// );
// }
