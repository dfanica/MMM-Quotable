# MMM-Quotable

A MagicMirror module for displaying random quotes using the [Quotable API](https://github.com/lukePeavey/quotable).

## Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch) (included with MagicMirror)

## Installation

1. Navigate to your MagicMirror `modules` directory and execute `git clone https://github.com/dfanica/MMM-Quotable.git`. 
   Alternatively, download the zip file from the repository and extract it to the `modules` directory.
2. Add the module configuration object to the `modules` array in the `config/config.js` file.

## Configuration

| Option          | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| `updateInterval`| How often to fetch a new quote (in milliseconds). Default: `24 * 60 * 60 * 1000` (1 day) |
| `fadeSpeed`     | Speed of the quote fade in/out animation (in milliseconds). Default: `1000`              |
| `maxLength`     | Maximum length of quote text. Default: `100`                                             |
| `tags`          | Tags to filter the quotes by. See Quotable API documentation for details.                |

### Example Configuration

```
{
    module: "MMM-Quotable",
    position: "lower_third",
    config: {
        updateInterval: 6 * 60 * 60 * 1000, // 6 hours
        fadeSpeed: 2000,
        maxLength: 100,
        tags: "motivational|inspirational"
    }
} // <-- don't forget to add the comma here, if needed
```

## Credits

- Luke Peavey [Quotable API](https://github.com/lukePeavey/quotable).
