var now = new Date();
fallInlove = new Date('2013-05-23'),
loveDays = Math.floor((now - fallInlove) / 86400000) + 1;
function renewParam() {
    now = new Date();
    fallInlove = new Date('2013-05-23'),
    loveDays = Math.floor((now - fallInlove) / 86400000) + 1;
}
function init() {
    renewParam();
    $('#showDays').text(loveDays);
    $('#people1>p').text(function () {
        return new Date(now - 1000 * 60 * 60 * 2.5).toLocaleTimeString('ja-JP');
    });
    $('#people2>p').text(now.toLocaleTimeString('ja-JP'));
}

$(function () {
    $(parent).on('touchstart', function () {
        event.preventDefault();
        return false;
    });
    setInterval(init, 300);
    $('#page-container').css('opacity', 1);
});