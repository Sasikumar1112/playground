# playground
Just have playground for my learning. Not going to help you
# serving htmls
1) using python
```py
    python3 -m http.server 8000
```

2) using node
```bash
    npm install -g serve
    # install serve package globally
    serve .
    # or to serve only files in html folder
    serve html 
```

# Testing
* uses playwright
```bash
    #install
    npm init playwright@latest
    # runs tests in `tests` folders
    npx playwright test
    # show the report
    npx playwright show-report
    
    # Run test with UI and debug
    npx playwright test --ui
```

# Blunder
* **stylesheet** not `s` plural