

    export function Delete(){
        console.log('even working')
        const token=localStorage.getItem('token');
        return (
            localStorage.removeItem('token')

        )
    }