// Add this to make social icons clickable
document.querySelectorAll('.social ul li').forEach(item => {
    item.addEventListener('click', (e) => {
        const platform = e.target.classList[1].split('-')[1]; // Gets "facebook", "envelope", etc.
        
        const links = {
            facebook: 'https://www.facebook.com/profile.php?id=100071448600492',
            envelope: 'mailto:odeydivine16@email.com',
            linkedin: 'www.linkedin.com/in/odey-divine'
        };
        
        if (links[platform]) {
            window.open(links[platform], '_blank');
        }
    });
});