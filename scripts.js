document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Dec 2021 - Dec 2023',
        title: 'Test Technician 2',
        description: 'Collaborated with team members on calculating passing algorithms for individual systems before they are sold to clients overseas.\n\nAlgorithms include the results of the samples that were used, passing the hvf, LHPC1 svf, LHPC2 svf criteria.\nIf the results fail any one of these 3 criterias, certain troubleshooting steps need to be administered.'
    },
    {
        date: 'Sep 2016 - Sept 2017',
        title: 'Software Developer',
        description: 'Actively engaging in SCRUM meetings to discuss weekly objectives and ensuring timely completion of tasks by the end of each week' + '\nUpdating the front end of websites in .NET connecting through C#/HTML and occasional updates to the tables in SQL Server.\nClients can now see updated information on their websites on the front end of the websites.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
       // description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
