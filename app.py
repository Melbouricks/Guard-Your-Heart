from flask import Flask, render_template, url_for, request
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def index():
    return render_template("index.html")

@app.route('/assessment')
def assessment():
    return render_template("assessment.html")

@app.route('/results', methods=['POST'])
def results():
    if request.method == 'POST':
        # Better way to access data than request.form['age']
        # to avoid getting an exception if null value is sent.
        # print(request.form.get('age')) 
        return render_template("results.html")
    else:
        return "Hello"

if __name__ == "__main__":
    app.run(debug=True)