import React from "react";
import { withStorageListener } from "./withStorageListener";
function ChangeAlert({show, toggleShow}){
    if(show){
        return <p>alguieen</p>;
    }
}

const ChangeAlertWithStorageListener= withStorageListener(ChangeAlert)
export {ChangeAlertWithStorageListener}