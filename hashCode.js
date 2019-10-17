function hashCode(url) {
    var hash = 0;
    if (url.length == 0) {
        return hash;
    }
    for (var i = 0; i < url.length; i++) {
        var char = url.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    hash = Math.abs(hash);
    return hash;
}

module.exports = hashCode;
