function navigate(section) {
    switch (section) {
        case 'Hygiene':
            // Code pour naviguer vers la section Hygiene
            console.log('Navigate to Hygiene section');
            break;
        case 'Trophies':
            // Code pour naviguer vers la section Trophies
            console.log('Navigate to Trophies section');
            break;
        case 'Calendar':
            // Code pour naviguer vers la section Calendar
            console.log('Navigate to Calendar section');
            window.location.href = 'calendar.html';
            break;
        case 'Inventory':
            // Code pour naviguer vers la section Inventory
            console.log('Navigate to Inventory section');
            break;
        case 'Shop':
            // Code pour naviguer vers la section Shop
            console.log('Navigate to Shop section');
            break;
        case 'Home':
            window.location.href = 'index.html'
        default:
            console.log('Unknown section');
            break;
    }
}
