from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def index():
    return render_template("index.html")

@app.route('/assessment')
def assessment():
    return render_template("assessment.html")

@app.route('/results')
def results():
    return render_template("results.html")

if __name__ == "__main__":
    app.run(debug=True)