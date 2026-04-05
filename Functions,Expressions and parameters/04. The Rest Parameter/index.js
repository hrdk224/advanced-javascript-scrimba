function getLabelsHtml(text, sender, ...rest) {
    /*
    Challenge:
    1. Add parameters.
    2. Update the HTML template where you 
       see **NAME**
    3. Return HTML template for each label.   
    */

    return rest.map(rest => {
        return `
        <div class="label-card">
            <p>Dear ${rest.name}</p>
            <p>${text}</p>
            <p>Best Wishes,</p>
            <p>${sender}</p>

        </div>`}
    ).join('')
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁 '
const sender = 'Tom'

document.getElementById("labels-container").innerHTML = getLabelsHtml(
    text,
    sender,
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Marriet' }
)