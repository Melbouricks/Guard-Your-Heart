from Guard_Your_Heart import app
from flask import render_template, Flask

@app.errorhandler(404)
def invalid_route(e):
    return render_template("404.html")

if __name__ == "__main__":
    app.run(debug=True)
