var ghpages = require('gh-pages');
//es un comentario de prueba
ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://https://github.com/symphony701/FacturaXpress', // Update to point to your repository  
        user: {
            name: 'Symphony', // update to use your name
            email: 'rnsebastian701@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)