const fs = require('fs');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const html = fs.readFileSync('index.html', 'utf8');

assert(html.includes('<title>Kubeverse Demo Site</title>'), 'Missing expected page title');
assert(html.includes('<h1>Kubeverse Demo Site</h1>'), 'Missing expected main heading');
assert(html.includes('practice CI/CD with Jenkins'), 'Missing expected CI/CD description text');
assert(html.includes('Pipeline Features'), 'Missing expected features section heading');

console.log('All website tests passed.');
