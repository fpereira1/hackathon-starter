/* eslint-env jquery, browser */
$(document).ready(() => {
  $.getJSON('/members.json', null, (data) => {
    const members = data.members;

    members.forEach(member => {
      $('.members-list').append(
        $('<p>').text(member.email)
      );
    });
  });
});
