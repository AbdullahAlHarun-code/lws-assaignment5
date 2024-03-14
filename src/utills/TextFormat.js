const textCapitalize = function capitalizeText(text) {
    return text.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

const getFullName = function fullName(post){
    return `${post.author.firstName} ${post.author.lastName}`;
}
const dateFormat = function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const addHashTags = function addHashTags(inputString) {
    // Split the input string by comma
    const words = inputString.split(',');

    // Trim each word and add # before it
    const hashtags = words.map(word => `#${word.trim()}`);

    // Join the words back together
    return hashtags.join(', ');
}


export {textCapitalize, getFullName, dateFormat,addHashTags}