from flask import Flask, render_template
from flask_jsglue import JSGlue


app = Flask(__name__)
jsglue = JSGlue(app)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/film")
def film():
    return render_template("film.html")

@app.route("/about")
def more():
    return render_template("more.html")


if __name__ == "__main__":
    app.run(debug=True)