import { useEffect } from 'react';

function useLog(state) {
    useEffect(logger, [state])

    function logger() {
        console.log("Efeito colateral", state)
    }

    return state + '... Att, Rocha'
}

export default useLog;