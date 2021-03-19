export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        let serializedStateReturn = JSON.parse(serializedState);
        
        if (window.location.pathname.includes('reset-password')) {
            serializedStateReturn.router.location.pathname=window.location.pathname;
        }
        return serializedStateReturn;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};