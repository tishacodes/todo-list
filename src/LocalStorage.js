//function that loads the state from local storage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");

        //if null, key does not exist
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch(err){
        return undefined;
    }
}

//function that saves the state to local storage
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    }
    catch(err){
        //ignore write errors
    }
}