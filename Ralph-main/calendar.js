document.addEventListener('DOMContentLoaded', function () {
    const monthElement = document.querySelector('.month');
    let currentMonth = new Date(); // Initialisez avec la date actuelle
    let selectedMonth; // Ajoutez cette ligne

    function navigateMonth(direction) {
        selectedMonth = new Date(currentMonth);
        selectedMonth.setMonth(currentMonth.getMonth() + direction);

        if (selectedMonth.getMonth() === 12) {
            selectedMonth.setFullYear(currentMonth.getFullYear() + 1);
            selectedMonth.setMonth(0);
        } else if (selectedMonth.getMonth() === -1) {
            selectedMonth.setFullYear(currentMonth.getFullYear() - 1);
            selectedMonth.setMonth(11);
        }

        const formattedMonth = selectedMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

        if (!isNaN(selectedMonth.getTime())) {
            currentMonth = selectedMonth;
            monthElement.textContent = formattedMonth;
            console.log('Navigated to:', formattedMonth);
            generateCalendar(selectedMonth);
            highlightCurrentDate();
        }
    }

    const prevMonthButton = document.querySelector('.prev-month');
    const nextMonthButton = document.querySelector('.next-month');

    if (prevMonthButton && nextMonthButton) {
        prevMonthButton.addEventListener('click', function () {
            console.log('Clicked on Prev Button');
            navigateMonth(-1);
        });

        nextMonthButton.addEventListener('click', function () {
            console.log('Clicked on Next Button');
            navigateMonth(1);
        });
    }

    generateCalendar(currentMonth);
    highlightCurrentDate();
});

function generateCalendar(selectedMonth) {
    const tableBody = document.querySelector('.calendar-table tbody');
    tableBody.innerHTML = '';

    const daysInMonth = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1, 0).getDate();

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (dayCount <= daysInMonth) {
                cell.textContent = dayCount;
                dayCount++;
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }

    highlightCurrentDate();
}

function highlightCurrentDate() {
    const currentDate = new Date(); // Obtenez la date actuelle
    const cells = document.querySelectorAll('.calendar-table td');

    cells.forEach(cell => {
        const cellDate = new Date(selectedMonth.getFullYear(), selectedMonth.getMonth(), parseInt(cell.textContent));
        if (cellDate.toDateString() === currentDate.toDateString()) {
            cell.classList.add('current-date');
        } else {
            cell.classList.remove('current-date');
        }
    });
}

// Appel initial de la fonction pour mettre en surbrillance la date actuelle
highlightCurrentDate();
