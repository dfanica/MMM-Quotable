const NodeHelper = require("node_helper");
const fetch = require("node-fetch");

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node_helper for module [" + this.name + "]");
    },

    getQuote: function() {
        var self = this;
        var maxLength = self.config.maxLength;
        var tags = self.config.tags;
        var url = "https://api.quotable.io/random?maxLength=" + maxLength + "&tags=" + tags;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            var quoteText = data.content;
            var quoteAuthor = data.author;
            self.sendSocketNotification("QUOTE", {
                quote: quoteText,
                author: quoteAuthor
            });
        })
        .catch(error => {
            console.error(self.name + ": Could not load quote.", error);
        });
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "GET_QUOTE") {
            this.getQuote();
        }
    }
});
