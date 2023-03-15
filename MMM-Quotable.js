/* Magic Mirror
 * Module: MMM-Quotable
 *
 * Made with lukePeavey's Quotable API https://github.com/lukePeavey/quotable
 */

Module.register("MMM-Quotable", {
    // Define module defaults
    defaults: {
        updateInterval: 24 * 60 * 60 * 1000, // 1 day
        fadeSpeed: 1000,
        maxLength: 100,
        tags: "motivational|inspirational"
    },
  
    // Define start sequence
    start: function() {
        var self = this;
        self.quote = "Loading quote...";
        self.author = "";
        self.getQuote();
        setInterval(function() {
            self.getQuote();
        }, self.config.updateInterval);
    },
  
    // Define required styles
    getStyles: function() {
        return ["MMM-Quotable.css"];
    },
  
    // Get a random quote from the Quotable API
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
                self.quote = quoteText;
                self.author = quoteAuthor;
                self.updateDom(self.config.fadeSpeed);
            })
            .catch(error => {
                console.error(self.name + ": Could not load quote.", error);
            });
    },
  
    // Override dom generator
    getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.className = "quotable";
        var quote = document.createElement("div");
        quote.className = "quote-text";
        quote.innerHTML = this.quote;
        wrapper.appendChild(quote);
        var author = document.createElement("div");
        author.className = "quote-author";
        author.innerHTML = this.author;
        wrapper.appendChild(author);
        return wrapper;
    }
});
